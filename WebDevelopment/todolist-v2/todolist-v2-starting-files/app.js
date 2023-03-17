//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/todolistDB");

const itemsSchema = {
  name: String
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item ({
  name: "Welcome to your todolist!"
})

const item2 = new Item ({
  name: "Welcome to your todolist! 2"
})

const item3 = new Item ({
  name: "Welcome to your todolist! 3"
})

const defaultItems = [item1,item2,item3];

const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List",listSchema);

app.get("/", function(req, res) {

  async function runFind() {
    const foundItems = await Item.find({});

    if (foundItems.length === 0) {
      Item.insertMany(defaultItems).then(function(){
        console.log("Successfully saved items to DB");
      }).catch(function(err){
        console.log(err);
      });
      res.redirect("/");
    } else {
      console.log(foundItems);
      res.render("list", {listTitle: "Today", newListItems: foundItems});
    }
  }
  
  runFind().catch(console.dir);

});

app.get("/:customListName",function(req,res){
  const customListName = _.capitalize (req.params.customListName);
  
  const list = new List({
    name: customListName,
    items: defaultItems
  });

  list.save();

})

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  });

  if(listName === "Today"){
    item.save();
    res.redirect("/");
  } else {
    List.findOne({name: listName}, function(err,foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    })
  }
});

app.post("/delete",function(req,res){

  const listName = req.body.listName;

async function runDelete() {

  const checkedItemID = req.body.checkbox;
  await Item.deleteOne ({_id: checkedItemID});
  console.log("Item deleted");
  res.redirect("/");
}

if (listName ==="Today"){
  runDelete().catch(console.dir);
} else {
  List.findOneAndUpdate({name: listName},{$pull: {items: {_id: checkedItemID}}}).then(function(){
    if (!err){
      res.redirect("/" + listName);
    }
  });
}
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

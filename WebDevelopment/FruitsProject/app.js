const mongoose = require ('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

// fruit schema

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true,"Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit ({
//   name: "Apple",
//   rating: 8,
//   review: "Preety solid as a fruit2."
// })

// fruit.save().then(()=>console.log('fruit Saved'));

// const fruit = new Fruit ({
//   name: "Peaches",
//   rating: 7,
//   review: "Peaches are yummy!"
// })

// fruit.save().then(()=>console.log('fruit Saved'));

// person schema

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: String
})

const Person = mongoose.model("Person", personSchema);

// const fruit = new Fruit ({
//   name: "Pineapple",
//   rating: 5,
//   review: "Great fruit!!"
// })

// fruit.save().then(()=>console.log('fruit Saved'));


// const mango = new Fruit ({
//   name: "mango",
//   rating: 7,
//   review: "Awesome!!"
// })

// mango.save().then(()=>console.log('fruit Saved'));



const person = new Person ({
  name: "Amy",
  age: 12,
  favouriteFruit: "Pineapple"
})

// person.save().then(()=>console.log('person Saved'));

// relationships with mongoose



// find record

// async function runFind() {
//   const fruits = await Fruit.find({_id: "6409e92f1d2029c60decc687"});
//   console.log(fruits);
// }

// runFind().catch(console.dir);

// find all person records 

async function runFindAllPersons() {
  const persons = await Person.find({});
  console.log(persons);
}

runFindAllPersons().catch(console.dir);

// find all fruit records 

// async function runFindAll() {
//   const fruits = await Fruit.find({});
//   console.log(fruits);
// }

// runFindAll().catch(console.dir);

// update record

// async function runUpdate() {
//   await Fruit.updateOne ({_id: "6409e92f1d2029c60decc687"}, {name: "Peachess"});
//   console.log("Fruit updated");
// }

// runUpdate().catch(console.dir);

// delete record
// async function runDelete() {
//   await Fruit.deleteOne ({_id: "6409e92f1d2029c60decc687"}, {name: "Peachess"});
//   console.log("Fruit deleted");
// }

// runDelete().catch(console.dir);

// delete many records

// async function runDeleteMany() {
//   await Fruit.deleteMany ({name: "Peaches"});
//   console.log("Fruits deleted");
// }

// runDeleteMany().catch(console.dir);
//                                                           add event listeners
$("h1").click(function(){
    $("h1").css("color","purple");
});

// click listener change color with javascript
// for (var i=0; i<5;i++) {
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color = "purple";
//     });
// } 

// click listener change color with jQuery
// $("button").click(function(){
//     $("h1").css("color","purple");
// })

$(document).keypress(function(event){
    // console.log(event.key);
    $("h1").text(event.key);
})

$("h1").on("mouseover",function(){
    $("h1").css("color","red");
})

//                                                          select / manipulate elements with jQuery
$("h1").addClass("big-title margin-50");
// $("h1").text("Bye");

// Manipulate attribute values
// $("a").attr("href","https://ro.yahoo.com/?p=us")

// $("button");
// $("button").html("<em>Hey</em>");
// $("button").text("<em>Hey</em>");

//                                                          adding / removing elements with jquery
// $("h1").before("<button>new</button>");
// $("h1").after("<button>new</button>");
// $("h1").prepend("<button>new</button>");
// $("h1").append("<button>new</button>");
// $("button").remove();

//                                                         animation with jquery
// hide || show
// $("button").on("click",function(){
//     $("h1").hide();
// })
// $("button").on("click",function(){
//     $("h1").hide();
// })

// hide && show 
// $("button").on("click",function(){
//     $("h1").fadeOut();
// })
// $("button").on("click",function(){
//     $("h1").fadeToggle();
// })
// $("button").on("click",function(){
//     $("h1").slideToggle();
// })

// $("button").on("click",function(){
//     $("h1").animate({margin:"20px"});
// })

$("button").on("click",function(){
    $("h1").animate({margin:"20px"}).animate({margin:"40px"}).animate({margin:"20px"}).animate({margin:"40px"}).animate({margin:"20px"}).animate({margin:"20px"});
})

// $("button").on("click",function(){
//     $("h1").slideUp().slideDown().animate({opacity:0.5});
// })
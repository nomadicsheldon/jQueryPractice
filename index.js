/*
 If we put jQuery script in <head> then we can use below code to process, first we will check
 is query ready or not.
👽👽👽👽👽👽

$(document).ready(function() {
  $("h1").css("color", "red");
})

*/

//👉 setting property
$("h1").css("color", "red");

//👉 getting property
console.log($("h1").css("color"));

//👉 adding class

// $("h2").addClass("big-title");

//👉 remove class

// $("h2").removeClass("big-title");

//👉 adding multiple class

$("h2").addClass("big-title margin-50");

//👉 checking for, if any element contains perticular class
console.log($("h2").hasClass("margin-50"));
console.log($("h1").hasClass("margin-50"));

//👉 setting text for h1
$("h1").text("Bye");

//👉 setting text for button and multiple buttons exist in code, so it will replace all places.
$("button").text("Don't clicking me");

//👉 setting inner HTML for buttons
$("button").html("<em>Hey</em>");

//👉 getting attributes
console.log($("img").attr("alt"));
console.log($("a").attr("href"));

//👉 setting attributes
$("a").attr("href", "https://www.himanshurajput.com");
console.log($("a").attr("href"));

//👉 getting classes (a class is also an HTML attribute)
console.log($("h3").attr("class"));

//👉 adding event listener
$("h2").click(function() {
  $("h2").css("color", "purple");
});


// using pure JS
/*
var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    document.querySelector("h3").style.color = "purple";
  });
}
*/

//👉 using jQuery for adding event listener
$("button").click(function() {
  $("h3").css("color", "purple");
});

//👉 event listener for input
$("input").keydown(function(event){
  console.log(event.key);
});

//👉 event listener for full page and changing text for h3
$(document).keydown(function(event){
  $("h3").text(event.key);
});

//👉 adding event listener for any type
$(document).on("mouseover", function(){
  $("h3").css("color", "purple");
});

//👉 adding new event on the family
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");

//👉 removing all button element
// try this -

// $("button").remove();


//👉 animation in jQuery
/*
$("button").click(function(){
  $("h2").hide();
});

$("h1").click(function(){
  $("h2").show();
});

$("button").click(function(){
  $("h2").toggle();
});
*/

/*
$("button").click(function(){
  $("h2").fadeOut();
});

$("h1").click(function(){
  $("h2").fadeIn();
});

$("button").click(function(){
  $("h2").fadeToggle();
});
*/

/*
$("button").click(function(){
  $("h2").slideUp();
});

$("h1").click(function(){
  $("h2").slideDown();
});

$("button").click(function(){
  $("h2").slideToggle();
});
*/

// 👉 in animate you can only change css properties which have numeric value.
/*
$(document).on("click", function(){
  $("h3").animate({opacity: 0.5});
});

$(document).on("click", function(){
  $("h1").animate({margin: 50});
});

$(document).on("click", function(){
  $("h1").animate({margin: "20%"});
});
*/

// 👉 chaining animation
$(document).on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

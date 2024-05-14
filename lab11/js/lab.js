// lab.js - callbacks
// Author: Ian Santos
// Date: 05/02/2024

// Constants
function main() {
  // Bonus Task button 
$(".specialSections").append("<button class='special-sections'>Refractored</button>");
$(".special-sections").click(function() {
  console.log("Button clicked");
  $(this).parent().toggleClass('special');
});

// Initial Task
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
  // add a click listener to the challenge button
$("#button-challenge").click(function()
{
  // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass('special');
    $("#button-challenge").remove();
});
  $("#problems").append("<button id='button-problems'>Make Special</button>");
  // add a click listener to the challenge button
$("#button-problems").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#problems").toggleClass("special");
  $("#button-problems").remove();
});
$("#reflection").append("<button id='button-reflections'>Make Special</button>");
  // add a click listener to the challenge button
$("#button-reflections").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#reflection").toggleClass("special");
  $("#button-reflections").remove();
});

}
// let's get this party started
main();

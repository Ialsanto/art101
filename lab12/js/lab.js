// lab.js - Conditionals
// Author: Ian Santos
// Date: 05/16/2024

// Constants
// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}
// Create a new javascript file in your code editor in your lab's js folder

// Put a comment blockLinks to an external site. at the top of your program
// Create a function sortingHat()
// that takes a string as an argument: function sortingHat(str)
// counts the letters in str and assigns it to a variable length
// uses modulus (% operator) to get the remainder with 4: mod = length % 4;
// mod will now be a value between 0 and 3
// create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
// Create an click listener attached to #button
// that gets the value of #input and assigns it to a variable name
// runs sortingHat(name) and stores the result in a variable house
// appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
let houses = ["Gryffindor","Slytherin","Hufflepuff"];
function sortingHat(str){ 
  let length = str.split('').length;
  let mod = length % 3;
  console.log(mod);
  return houses[mod];
  if(mod === 0)
  {
    return "Gryffindor"
  }
  else if(mod === 1)
  {
    return "Slytherin"
  }
  else
  {
    return "Hufflepuff"
  }
}
function main() {
 
  $("#submit").click(function(){
    // get value of input field
    const userName = $("#user-input").val();
    console.log("hello");
    // now let's sort it
    whichHouse = sortingHat(userName);
    // append a new div to our output div
    $("#output").html('<div class="text"><p> The Sorting Hat has sorted you into ' + whichHouse + '</p></div>');
  });
  // $("#submitAna").click(function(){
  //   const userName = $("#user-name").val();
  //   userNameAnagram = anagram(userName);
  //   $("#output").html('<div class="anagram"><p>' + userNameAnagram + '</p></div>');
  //   console.log(userNameAnagram);
  // })


}
// let's get this party started
main();

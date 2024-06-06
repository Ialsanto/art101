// lab.js - for loops
// Author: Ian Santos
// Date: 05/24/2024

function fizzbuzz(max = 200, con1 = 3, con2 = 5, con3 = 7) {

  let oneLongString = "";

  // print all the numbers from 1 to max.
  for (let i = 1; i <= max; i++) {
      
      let str = "";

      if (i % con1 == 0) {
        str += "Fizz";
      }
      if (i % con2 == 0) {
        str += "Buzz";
      }  
      if (i % con3 == 0) {
        str += "Boom";
      }
      if (str == "") {
        console.log(i);
        oneLongString += "<p class='num'>" + i + "</p>";
      } else {
        console.log(str + '!');
        oneLongString += "<p class='text'>" + str + '!</p>';
      }
      
  }

  // Output the result to the #output div
  $("#output").html(oneLongString);
}

// Constants

function main() {
    fizzbuzz();
}

// let's get this party started
$(document).ready(main);
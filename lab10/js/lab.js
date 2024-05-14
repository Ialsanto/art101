// lab.js - callbacks
// Author: Ian Santos
// Date: 05/02/2024

// Constants
function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}
// click listener for button

function main() {
  let index = 0;
  //lab 10 button listener 
  $("#make-convo").click(function(){
    // get new fake dialogue

    const newText = generateRandomText();
    // append a new div to our output div
    $("#output").append('<div id="text'+index+'"><p>' + newText + '</p></div>');
   
  
    let currentSelector = $('#text' + index);
    if (index % 2 === 0) {
      // If even, change the inner HTML to "wow"
      currentSelector.toggleClass("special");
    }
    index += 1;
    console.log('Current index: ' + index);
  });
  

}
// let's get this party started
main();

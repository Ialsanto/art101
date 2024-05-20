// lab.js - JavaScript Events and Forms
// Author: Ian Santos
// Date: 05/15/2024

// Constants
// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

function moveLettersAround(word)
{
  let name = word.split('');
  let min = 0;
  let max = word.length;
  for (var i = 0; i < name.length; i++) 
  {
    const randLen = Math.floor(Math.random() * (max));
    console.log(randLen);
    let temp = name[min];
    name[min] = name[randLen];
    name[randLen] = temp;
  }
  return name.join('');

}
function anagram(inputString)
{
  let name = inputString.split(' ');
  let min = 0;
  let max = name.length;
  if(max>1){
    for(var i = 0; i<max;i++)
    {
      name[i] = moveLettersAround(name[i])
    }
    return name.join(' ')
  }
  else{
    return moveLettersAround(name[0])
  }

}
function main() {
  let userNameSorted;
  // click listener for button
  $("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();
    // now let's sort it
    userNameSorted = sortString(userName);
    // append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
  });
  $("#submitAna").click(function(){
    const userName = $("#user-name").val();
    userNameAnagram = anagram(userName);
    $("#output").html('<div class="anagram"><p>' + userNameAnagram + '</p></div>');
    console.log(userNameAnagram);
  })


}
// let's get this party started
main();

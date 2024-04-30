// lab.js - expirementing with functions 
// Author: Ian Santos
// Date: 04/29/2024

// Constants


//my ride object with a function
function getName(){
  let name = prompt("Please enter your name", "Harry Potter");
  let arrayOfName;
  if(name!=null){
    arrayOfName = name.split('');
    return arrayOfName.sort();
  }
 
  return "you didnt give me a good name !!!!";

  }

function main() {
  let currName = getName();
  if(currName){
    document.getElementById("output").innerHTML ="Hello " + currName + "! How are you today?";
  }
  else{
    console.log("error")
  }
}

// let's get this party started
main();

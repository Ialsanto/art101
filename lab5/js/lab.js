// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants
let make, model, color, year,ownIt,age;
year = 2007
make = "Honda"
model = "Civic"
color = "black"
ownIt = false
age = 2024 - year;
// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(year,make,model,color,ownIt,age) 
{
  document.writeln("Make: " + make + "<br>");

  document.writeln("Model: " + model + "<br>");

  document.writeln("Color: " + color + "<br>");

  document.writeln ("Year: " + year + "<br>");

  document.writeln("Age: " + age + " years<br>");
  
  document.writeln("owner: " + ownIt + "<br>");
}
function main() 
{
  myFunction(year,make,model,color,ownIt,age)
}

// let's get this party started
main();

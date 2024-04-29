// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants
const myTransport = ["Car","Bus","Train","Scooter"];

//my ride object with a function
let myMainRide = { 
  make: "Toyota",
  model: "camry", 
  color:"black",
  year:2014,
  age: function(){
    return 2024 - this.year
  }
};

function main() {
  document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
}

// let's get this party started
main();

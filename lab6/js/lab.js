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

let MyResponses = {
  1:"This text is all in my JS file \n Challenge: Worked with javascript variables more specifically learned about Arrays [] and object {}",
  2:"Problems: What problems arose? How did you solve them? No problems came up during this asignment however I was writing a bug during \n the printing of these values since objects are represented like object.name but if you name the object numbers js reads them like an\n array ex object[1]. My IDE quickly fixed it though so I didnt do much with debuging",
  3:"Reflection: Many of the topics covered on Thursdays class were 98% connected to this lab and incorporating it was easier because of", extra:"it I decided to take it a step further and make all of these responses objects and gave them numbered key values I realized I could have also used an array, but owell"
}
function responses(){

}
function main() {
  document.writeln("<pre>",MyResponses[1],"</pre>");
  document.writeln("<pre>",MyResponses[2],"</pre>");
  document.writeln("<pre>",MyResponses[3],"</pre>");
  document.writeln("<pre>",MyResponses.extra,"</pre>")
  document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
  document.writeln("most of UCSC rides on a <pre>", 
    myTransport[1], "</pre>");
}


// let's get this party started
// JSON.stringify(MyResponses,NULL,'\t')
main();

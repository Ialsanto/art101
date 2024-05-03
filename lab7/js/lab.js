// lab.js - expirementing with functions 
// Author: Ian Santos
// Date: 04/29/2024

// Constants

//will store the original name given for future refrence 
let originalName='';
//prompts for users name
function getName(){
  let name = window.prompt("Please enter your name", "Jon Snow?");
  originalName = name;
  let arrayOfName;
  let newname='';
  //checks if you gave me a real name 
  if(name != '')
  {
    //this will split and make an array of the name given 
    arrayOfName = name.split(' ');
    console.log(arrayOfName) //prints array to console
    //for loop looping through the array starting at 0 and going to whatever size the array is 
    for (let i = 0; i < arrayOfName.length; i++){
      console.log(i);//shows the what i is 
      console.log(arrayOfName[i]);//the value at that location checkout your web browser console while on lab7 link
      //new name becomes the sorted name 
      newname = newname+""+arrayOfName[i].split('').sort().join('');
      console.log(newname);
    }
    return newname;   
  }
  return -1;
}

function main() {
  let currName = getName();

  var nametag = document.createElement('div');
  nametag.id = 'nametag';
  var hello = document.createElement('div');
  hello.id = 'hello';
  var name = document.createElement('div');
  name.id = 'name';
  if(currName!=-1){
    document.getElementById("output").innerHTML = "Hello your name sorted is " + currName;
    hello.innerHTML = "hello";
    name.innerHTML = originalName
    document.getElementById('output').appendChild(nametag).appendChild(hello);
    document.getElementById('output').appendChild(nametag).appendChild(name);
  }
  else{
    document.getElementById("output").innerHTML = "Really?? refresh and give me a better name";
  }
}

// let's get this party started
main();

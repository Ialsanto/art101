// lab.js - for loops
// Author: Ian Santos
// Date: 05/24/2024

function fizzbuzz(max,con1,con2,con3)
{

  // print all the numbers from 1 to 120.
  for (let i = 1; i <= 120; i++) {
      
      let str = "";

      if(((i % 3 == 0) && (i % 5 == 0)) || ((i % 3 == 0) &&(i % 7 == 0)) ||((i % 5 == 0) && (i % 7 == 0))){
        str+="FizzBuzz"
      }
      if (i % 3 == 0) {
        str += "Fizz";
      }
      if (i % 5 == 0) {
        str += "Buzz";
      }  
      if (i % 7 == 0) {
        str += "Boom";
      }
      if (str == "") {
        console.log(i);
        $("#output").append("<p class='num'>" + i);
      } else {
        console.log(str + '!');
        $("#output").append("<p class='text'>" + str + '!');
      }
      
    }
}
// Constants

function main() 
{
    fizzbuzz();
  // $("#submitAna").click(function(){
  //   const userName = $("#user-name").val();
  //   userNameAnagram = anagram(userName);
  //   $("#output").html('<div class="anagram"><p>' + userNameAnagram + '</p></div>');
  //   console.log(userNameAnagram);
  // })


}
// let's get this party started
main();

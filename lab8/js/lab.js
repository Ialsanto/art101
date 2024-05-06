// lab.js - callbacks
// Author: Ian Santos
// Date: 05/02/2024

// Constants
function printMe(x){
  console.log(x)
}
function calculation(x)
{
  return x/1000+ "    ";
};

function avg(x){
  return x-7
}
function main() {
  let number = [0,1,2,3,4,5,6,7,8,10,10,1,20,23,2]
  
  numsandword = ['hello',1,'testing',2,'what','if',3];
  numsandword.map(printMe);
  console.log(calculation(1000));
  console.log(calculation(100));
  console.log(calculation(10));

  console.log(numsandword.map(calculation));

  numsandword.map(function(x){return x+200;})

  let mappedResults = numsandword.map(calculation);
  let mapresults = number.map(avg);
  console.log(mappedResults)
  $("#output").before("Original array1 = ["+number.toString()+"]")

  $("#output").html("after mapping = "+mappedResults.toString());
  $("#output2").html("2nd mapping function "+mapresults.toString());
  
  $("#output2").after("<button id='myButton'>click me</button>");

  $( "#myButton" ).on( "click", function() {
    $( "#hidden" ).show( 10000, function() {
      $( this ).text( "Ok, DONE!" );});
  } );

  // $("#output2").after( "button" ).on( "click", doIt );
 
  $( "form" ).on( "submit", function( event ) {
    if ( $( "input" ).val() === "yes" ) {
      $( "p" ).show( 4000, function() {
        $( this ).text( "Ok, DONE! (now showing)" );
      } );
    }
    $( "span,div" ).hide( "fast" );
  
    // Prevent form submission
    event.preventDefault();
  } );

}

// let's get this party started
main();

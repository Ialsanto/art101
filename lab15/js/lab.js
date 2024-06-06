// lab.js - for loops
// Author: Ian Santos
// Date: 05/31s/2024

function mapBirthdayToPokemon(birthday) {
  const dayOfYear = (Date.UTC(birthday.getFullYear(), birthday.getMonth(), birthday.getDate()) - Date.UTC(birthday.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
  console.log(dayOfYear);
  const numPokemon = 898;
  if(dayOfYear===96){
    return 144;
  }
  return (dayOfYear % numPokemon) + 1;
} 
function fetchPokemonDetails(pokemonId, resultDiv) {
  $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
      method: 'GET',
      success: function(data) {
          const pokemonName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
          const pokemonImage = data.sprites.front_default;
          resultDiv.html(`
              <h2>Your Pokemon is: ${pokemonName}</h2>
              <img src="${pokemonImage}" alt="${pokemonName}">
          `);
      },
      error: function() {
          resultDiv.html('Failed to fetch Pokémon details.');
      }
  });
}
// Constants
let age = null;
function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}
function calculateAge(birthday) {
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
      age--;
  }

  return age;
}


function main() 
{
  $(document).ready(function() {
    $('#birthdayForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const birthdayInput = $('#birthday').val();
        const birthday = new Date(birthdayInput);
        const resultDiv = $('#result');

        if (isValidDate(birthday)) {
          const pokemonId = mapBirthdayToPokemon(birthday);
          fetchPokemonDetails(pokemonId, resultDiv);
      } else {
          resultDiv.html('Please enter a valid date.');
      }
    });
  });

}
// const URL = "https://perenual.com/api/article-faq-list";

// // create a button listener
// $("#my-button").click(function(){
//   console.log("Click");
//   // call ajax
//   $.ajax(ajaxObj);
// })

// // setup ajax object
// const ajaxObj = {
//   url: URL,
//   data: {
//     key: "sk-uCEA6659018900ac35690",
//   },
//   type: "GET",
//   dataType: "json",
//   success: ajaxSuccess,
//   error: ajaxError
// }

// // create ajax success callback (named)
// function ajaxSuccess(data) {
//   console.log("click")
//   // parse json
//   const dataA = data.data
//   const element1 = dataA[0];
//   const question = element1.question;
//   const answer = element1.answer;
//   const imageUrl = element1.default_image.regular_url;
//   console.log("Data:", data);
//   // put stuff in output div
//   $("#output").html("<h3>" + question);
//   $("#output").append("<img src='" + imageUrl + "' />")
//    $("#output").append("<p class='date'>" + question);
//   $("#output").append("<p class='description'>" + answer);
  
// }


// // create ajax error callback
// function ajaxError(request,error){
// 	  console.log("Oops:", error);
// }

// let's get this party started
main();

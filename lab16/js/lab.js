// lab.js - for loops
// Author: Ian Santos
// Date: 05/6/2024

// {
//   "month": "7",
//   "num": 614,
//   "link": "",
//   "year": "2009",
//   "news": "",
//   "safe_title": "Woodpecker",
//   "transcript": ...
//   "img": "https://imgs.xkcd.com/comics/woodpecker.png",
//   "title": "Woodpecker",
//   "day": "24"
//   }
// Constants

function fetchDetails(comicNumber, resultDiv) {
  $.ajax({
      url: `https://xkcd.com/${comicNumber}/info.0.json `,
      method: 'GET',
      success: function(data) {
          const imgLink = data.img;
          const title = data.tilte;
          const year = data.year;
          resultDiv.html(`
              <h2>Title ${title}, ${year}</h2>
              <img src="${imgLink}" alt="${title}">
          `);
      },
      error: function() {
          resultDiv.html('Failed to fetch Pokémon details.');
      }
  });
}

function main() 
{
  $(document).ready(function() {
    $('#comicNumber').on('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way
      const tempNum = $('#user-input').val();
      const resultDiv = $('#output');
      console.log("hello")
      fetchDetails(tempNum, resultDiv);
    });
  });




}
// let's get this party started
main();

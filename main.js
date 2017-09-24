// build search input for a given name
// name will filter, and for each result
  // create a path on a map with two points:
  // min address + full street name
  // max address + full street name

// create a Street Object that has:
  // full street name
  // street start address
  // street end address
  //
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8781, lng: -87.6298},
    zoom: 10
  });
  console.log("map loaded")
}

$( document ).ready(function() {
    console.log( "I's ready!" );
  const streets = [];

  $.ajax({
      url: "https://data.cityofchicago.org/resource/pasq-g8mx.json",
      type: "GET",
      data: {
        "$offset": 456,
        "$limit" : 3000,
        "$$app_token" : "wOzuzHgrzn2yk9FBzWLGAAsfQ"
      }
  }).done(function(data) {
    console.log("Retrieved " + data.length + " records from the dataset!");
    // console.log(data);
    // console.log(data)
    streets.push(...data);
  });



  $('input.autocomplete').autocomplete({
      data: {
        "Chicago": null,
        "State": null,
        "Michigan": null,
        "Pulaski": null,
        "Abbott": null
      },
      limit: 2, // The max amount of results that can be shown at once. Default: Infinity.
      onAutocomplete: function(val) {
        // Callback function when value is autcompleted.
        console.log(val)
        displayMatches()
        // findMatches(val, streets);
      },
      minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
    });

  function findMatches(wordToMatch, streets) {
    console.log(wordToMatch)
    console.log(streets)
    // return streets.filter(street => {
    //   const regex = new RegExp(wordToMatch, 'gi');
    //   console.log(street)
    // })
  }

  function displayMatches() {
    // const matchArray = findMatches(this.value, streets)
    // const html = matchArray.map(street => {
    //   const regex = new RegExp(this.value, 'gi');
      const streetName = `${streets[0].street} ${streets[0].suffix}`
      const streetStart = `${streets[0].min_address} ${streets[0].full_street_name}`
      const streetEnd = `${streets[0].max_address} ${streets[0].full_street_name}`
      html =  `
      <li>
        <p class="street-responses">Check out
        <span class="name">${streetName}</span>.
         This street runs from
        <span class="streetStart">${streetStart} </span>
         to
        <span class="streetEnd">${streetEnd} </span>
        What a STREET!</p>
      </li>
      `
   return results.innerHTML = html
  }

const searchInput = document.querySelector('.search-form')
const results = document.querySelector('.street-responses')

});


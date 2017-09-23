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

// $('input.autocomplete').autocomplete({
//     data: {
//       "Apple": null,
//       "Microsoft": null,
//       "Google": 'https://placehold.it/250x250'
//     },
//     limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
//     onAutocomplete: function(val) {
//       // Callback function when value is autcompleted.
//     },
//     minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
//   });

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
  console.log(data)
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8781, lng: -87.6298},
    zoom: 6
  });
  console.log("map loaded")
}

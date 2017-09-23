// build search input for a given name
// name will filter, and for each result
  // create a path on a map with two points:
  // min address + full street name
  // max address + full street name
$.ajax({
    url: "https://data.cityofchicago.org/resource/pasq-g8mx.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "YOURAPPTOKENHERE"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});
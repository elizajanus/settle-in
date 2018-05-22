$(document).ready(function () {
  $(".slider").slider();
});


$("#add-btn").on("click", function (event) {
  event.preventDefault();
  

  // make a sublet obj
  var newRental = {
    // Title/Street Address of streetAddress1 from input
    streetAddress1: $("#streetAddress1")
      .val()
      .trim(),
    // cityName  from input
    cityName: $("#cityName")
      .val()
      .trim(),
    // stateName from rent input
    stateName: $("#stateName")
      .val()
      .trim(),
    // number of roommates from roommates input
    zipCode: $("#zipCode")
      .val()
      .trim(),
    // apartments from apartments input
    price: $("#price")
      .val()
      .trim(),
    // apartments from apartments input
    beds: $("#beds")
      .val()
      .trim(),
    // managmentContactInfo from managementContactInfo input
    baths: $(".baths")
      .val()
      .trim(),
    // managmentContactInfo from managementContactInfo input
    sqFeet: $("#sqFeet")
      .val()
      .trim(),
    // number of roommates from roommates input
    pets: $(".pets")
      .val()
      .trim(),
    // apartments from apartments input
    landlord: $(".landlord")
      .val()
      .trim(),
    // managmentContactInfo from managementContactInfo input
    managementContactInfo: $(".managementContactInfo")
      .val()
      .trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/rentals", newRental)
    // on success, run this callback
    .then(function (data) {
      // log the data we found
      console.log(data);
    });

  // empty each input box by replacing the value with an empty string
  $("#streetAddress1").val("");
  $("#cityName").val("");
  $("#stateName").val("");
  $("#zipCode").val("");
  $("#price").val("");
  $("#beds").val("");
  $(".baths").val("");
  $("#sqFeet").val("");
  $(".pets").val("");
  $(".landlord").val("");
  $(".managementContactInfo").val("");
});
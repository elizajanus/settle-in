$(document).read(function () {
    // when user clicks add-btn
    $("#add-btn").on("click", function (event) {
        event.preventDefault();

        // make a sublet obj
        var newSublet = {
            // title of post
            title: $(".title").val().trim(),
            // description of apartment/sublet from input
            description: $(".description").val().trim(),
            // rent/cost from rent input
            rent: $("#rent").val().trim(),
            // number of roommates from roommates input
            roommates: $("#roommates").val().trim(),
            // number of baths from bath input
            baths: $(".baths").val().trim(),
            // whether or not female roommates live there from female input
            female: $("#female").val().trim(),
            // whether or not male roommates live there from female input
            male: $("#male").val().trim(),
            // whether pets are allowed from pets input
            pets: $("#pets").val().trim(),
            // street/location from location input
            location: $("#location").val().trim(),
            // landlord name from landlord input
            landlord: $("#landlord").val().trim(),
            // managementContactInfo from managementContactInfo input
            managementContactInfo: $("#managementContactInfo").val().trim(),

        };

        // send an AJAX POST-request with jQuery
        $.post("/api/sublet", newSublet)
            // on success, run this callback
            .then(function (data) {
                // log the data we found
                console.log(data);
            });

        // empty each input box by replacing the value with an empty string
        $(".title").val("");
        $("#description").val("");
        $("#rent").val("");
        $("#roommates").val("");
        $(".baths").val("");
        $("#female").val("");
        $("#male").val("");
        $(".pets").val("");
        $("#location").val("");
        $(".landlord").val("");
        $(".managementContactInfo").val("");

    });


});
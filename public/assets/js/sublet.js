$(document).read(function () {
    var subletContainer = $(".sublet-container");

    


    $('.dropdown-trigger').dropdown();
    $(document).on("click", "submit-sublet", handleNewSublet);
    $(document).on("click", "button-edit", handlePostEdit);
    $(document).on("click", "button-delete", handlePostDelete);

    var sublet;

    var url = window.location.search;
    var subletId;
    if (url.indexOf("?sublet_id=") !== -1) {
        subletId = url.split("=")[1];
        getSublet(subletId);
    } else {
        getSublet();
    }

    function getSublets(sublet) {
        subletId = sublet || "";
        if (subletId) {
            subletId = "/?sublet_id=" + subletId;
        }
        $.get("/api/sublet" + subletId, function (data) {
            console.log("Sublet", data);
            posts = data;
            if (!sublets || !sublets.length) {
                displayEmpty(sublet);
            } else {
                initializeRows();
            }
        });
    }

    

    function deleteSublet(id) {
        $.ajax({
            method: "DELETE",
            url: "/api/sublet" + id
        }).then(function () {
            getsublets(postCategorySelect.val());
        });
    }

    function initializeRows() {
        subletContainer.empty();
        var subletToAdd = [];
        for (var i = 0; i < sublets.length; i++) {
            subletToAdd.push(createNewRow(sublets[i]));
        }
        var subletToAdd = [];
        subletContainer.append(subletToAdd);
    }

    function createNewRow(sublets) {
        var formattedDate = new Date(post.createdAt);
        formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
        var newSubletCard = $("<div>");
        newSubletCard.addClass("card");
        var newSubletCardHeading = $("<div>");
        newSubletCardHeading.addClass("card-header");
        var deleteBtn = $("<button>");
        deleteBtn.text("x");
        deleteBtn.addClass("delete btn btn-danger");
        var editBtn = $("<button>");
        editBtn.text("EDIT");
        editBtn.addClass("edit btn btn-info");
        var newSubletTitle = $("<h2>");
        var newSubletDate = $("<small>");
        var newSubletAuthor = $("<h5>");
        newSubletAuthor.text("Written by: " + sublet.Author.name);
        var newSubletCardBody = $("<div>");
        newSubletCardBody.addClass("card-body");
        var newSubletBody = $("<p>");
        newSubletTitle.text(sublet.title + " ");
        newSubletBody.text(sublet.body);
        newSubletDate.text(formattedDate);
        newSubletTitle.append(newSubletDate);
        newSubletCardHeading.append(deleteBtn);
        newSubletCardHeading.append(editBtn);
        newSubletCardHeading.append(newSubletTitle);
        newSubletCardHeading.append(newSubletAuthor);
        newSubletCardBody.append(newSubletBody);
        newSubletCard.append(newSubletCardHeading);
        newSubletCard.append(newSubletCarddBody);
        newSubletCard.data("sublet", sublet);
        return newSubletCard;
    }

    function handleSubletDelete() {
        var currentSublet = $(this)
            .parent()
            .parent()
            .data("sublet");
        deleteSublet(currentSublet.id);
    }

    function handleSubletEdit() {
        var currentSublet = $(this)
            .parent()
            .parent()
            .data("sublet");
        window.location.href = "//I DONT KNOW WHAT TO PUT HERE//" + currentSublet.id;
    }

    function displayEmpty(id) {
        var query = window.location.search;
        var partial = "";
        if (id) {
            partial = " for Author #" + id;
        }
        subletContainer.empty();
        var messageH2 = $("<h2>");
        messageH2.html("No sublet yet" + partial + ", navigate <WHAT IS THE LINK THAT I NEED TO PUT HERE?>");
        subletContainer.append(messageH2);
    }

// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
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
      .then(function(data) {
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



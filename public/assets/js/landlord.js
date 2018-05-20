$(document).ready(function () {
    // Getting references to the name input and author container, as well as the table body
    var nameInput = $("#landlord-name");
    var landlordList = $("tbody");
    var landlordContainer = $(".landlord-container");
    // Adding event listeners to the form to create a new object, and the button to delete
    // an Author
    $(document).on("submit", "#landlord-form", handleLandlordFormSubmit);
    $(document).on("click", ".delete-landlord", handleDeleteButtonPress);

    // Getting the initial list of Authors
    getLandlords();

    // A function to handle what happens when the form is submitted to create a new Author
    function handleLandlordFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!nameInput
            .val()
            .trim()
            .trim()
        ) {
            return;
        }
        // Calling the upsertAuthor function and passing in the value of the name input
        upsertLandlord({
            name: nameInput.val().trim()
        });
    }

    // A function for creating an author. Calls getAuthors upon completion
    function upsertLandlord(landlordData) {
        $.post("/api/landlords", landlordData).then(getLandlords);
    }

    // Function for creating a new list row for authors
    function createLandlordRow(landlordData) {
        var newTr = $("<tr>");
        newTr.data("landlord", landlordData);
        newTr.append("<td>" + landlordData.name + "</td>");
        newTr.append("<td> " + landlordData.Reviews.length + "</td>");
        newTr.append(
            "<td><a href='/review?landlord_id=" + landlordData.id + "'>Go to Reviews</a></td>"
        );
        newTr.append(
            "<td><a href='/cms?landlord_id=" +
            landlordData.id +
            "'>Create a Review</a></td>"
        );
        newTr.append(
            "<td><a style='cursor:pointer;color:red' class='delete-landlord'>Delete Landlord</a></td>"
        );
        return newTr;
    }

    // Function for retrieving authors and getting them ready to be rendered to the page
    function getLandlords() {
        $.get("/api/landlords", function (data) {
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createLandlordRow(data[i]));
            }
            renderLandlordList(rowsToAdd);
            nameInput.val("");
        });
    }

    // A function for rendering the list of authors to the page
    function renderLandlordList(rows) {
        landlordList
            .children()
            .not(":last")
            .remove();
        landlordContainer.children(".alert").remove();
        if (rows.length) {
            console.log(rows);
            landlordList.prepend(rows);
        } else {
            renderEmpty();
        }
    }

    // Function for handling what to render when there are no authors
    function renderEmpty() {
        var alertDiv = $("<div>");
        alertDiv.addClass("alert alert-danger");
        alertDiv.text("You must create a landlord before you can create a review.");
        landlordContainer.append(alertDiv);
    }

    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
        var listItemData = $(this)
            .parent("td")
            .parent("tr")
            .data("landlord");
        var id = listItemData.id;
        $.ajax({
            method: "DELETE",
            url: "/api/landlords/" + id
        }).then(getLandlords);
    }
});
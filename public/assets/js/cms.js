$(document).ready(function () {
    // Getting jQuery references to the post body, title, form, and author select
    var bodyInput = $("#body");
    var titleInput = $("#title");
    var cmsForm = $("#cms");
    var landlordSelect = $("#landlord");
    // Adding an event listener for when the form is submitted
    $(cmsForm).on("submit", handleFormSubmit);
    // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
    var url = window.location.search;
    var reviewId;
    var landlordId;
    // Sets a flag for whether or not we're updating a post to be false initially
    var updating = false;

    // If we have this section in our url, we pull out the post id from the url
    // In '?post_id=1', postId is 1
    if (url.indexOf("?review_id=") !== -1) {
        reviewId = url.split("=")[1];
        getReviewData(reviewId, "review");
    }
    // Otherwise if we have an author_id in our url, preset the author select box to be our Author
    else if (url.indexOf("?landlord_id=") !== -1) {
        landlordId = url.split("=")[1];
    }

    // Getting the authors, and their posts
    getLandlords();

    // A function for handling what happens when the form to create a new post is submitted
    function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a body, title, or author
        if (!titleInput.val().trim() ||
            !bodyInput.val().trim() ||
            !landlordSelect.val()
        ) {
            return;
        }
        // Constructing a newPost object to hand to the database
        var newReview = {
            title: titleInput.val().trim(),
            body: bodyInput.val().trim(),
            LandlordId: landlordSelect.val()
        };

        // If we're updating a post run updatePost to update a post
        // Otherwise run submitPost to create a whole new post
        if (updating) {
            newReview.id = reviewId;
            updateReview(newReview);
        } else {
            submitReview(newReview);
        }
    }

    // Submits a new post and brings user to blog page upon completion
    function submitReview(review) {
        $.post("/api/reviews", review, function () {
            window.location.href = "/review";
        });
    }

    // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
    function getReviewData(id, type) {
        var queryUrl;
        switch (type) {
            case "review":
                queryUrl = "/api/reviews/" + id;
                break;
            case "landlord":
                queryUrl = "/api/landlords/" + id;
                break;
            default:
                return;
        }
        $.get(queryUrl, function (data) {
            if (data) {
                console.log(data.LandlordId || data.id);
                // If this post exists, prefill our cms forms with its data
                titleInput.val(data.title);
                bodyInput.val(data.body);
                landlordId = data.LandlordId || data.id;
                // If we have a post with this id, set a flag for us to know to update the post
                // when we hit submit
                updating = true;
            }
        });
    }

    // A function to get Authors and then render our list of Authors
    function getLandlords() {
        $.get("/api/landlords", renderLandlordList);
    }
    // Function to either render a list of authors, or if there are none, direct the user to the page
    // to create an author first
    function renderLandlordList(data) {
        if (!data.length) {
            window.location.href = "/landlords";
        }
        $(".hidden").removeClass("hidden");
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createLandlordRow(data[i]));
        }
        landlordSelect.empty();
        console.log(rowsToAdd);
        console.log(landlordSelect);
        landlordSelect.append(rowsToAdd);
        landlordSelect.val(landlordId);
    }

    // Creates the author options in the dropdown
    function createLandlordRow(landlord) {
        var listOption = $("<option>");
        listOption.attr("value", landlord.id);
        listOption.text(landlord.name);
        return listOption;
    }

    // Update a given post, bring user to the blog page when done
    function updateReview(review) {
        $.ajax({
            method: "PUT",
            url: "/api/reviews",
            data: review
        }).then(function () {
            window.location.href = "/review";
        });
    }
});
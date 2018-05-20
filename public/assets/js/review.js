$(document).ready(function () {
    /* global moment */

    // blogContainer holds all of our posts
    var reviewContainer = $(".review-container");
    // this would be for either house or apt or sublet?
    var reviewCategorySelect = $("#category");
    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete", handleReviewDelete);
    $(document).on("click", "button.edit", handleReviewEdit);
    // Variable to hold our posts
    var reviews;

    // The code below handles the case where we want to get blog posts for a specific author
    // Looks for a query param in the url for author_id
    var url = window.location.search;
    var landlordId;
    if (url.indexOf("?landlord_id=") !== -1) {
        landlordId = url.split("=")[1];
        getReviews(landlordId);
    }
    // If there's no authorId we just get all posts as usual
    else {
        getReviews();
    }

    // This function grabs posts from the database and updates the view
    function getReviews(landlord) {
        landlordId = landlord || "";
        if (landlordId) {
            landlordId = "/?landlord_id=" + landlordId;
        }
        $.get("/api/reviews" + landlordId, function (data) {
            console.log("Reviews", data);
            reviews = data;
            if (!reviews || !reviews.length) {
                displayEmpty(landlord);
            } else {
                initializeRows();
            }
        });
    }

    // This function does an API call to delete posts
    function deleteReview(id) {
        $.ajax({
            method: "DELETE",
            url: "/api/reviews/" + id
        }).then(function () {
            getReviews(reviewCategorySelect.val());
        });
    }

    // InitializeRows handles appending all of our constructed post HTML inside blogContainer
    function initializeRows() {
        reviewContainer.empty();
        var reviewsToAdd = [];
        for (var i = 0; i < reviews.length; i++) {
            reviewsToAdd.push(createNewRow(reviews[i]));
        }
        reviewContainer.append(reviewsToAdd);
    }

    // This function constructs a post's HTML
    function createNewRow(review) {
        var formattedDate = new Date(review.createdAt);
        formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
        var newReviewCard = $("<div>");
        newReviewCard.addClass("card");
        var newReviewCardHeading = $("<div>");
        newReviewCardHeading.addClass("card-header");
        var deleteBtn = $("<button>");
        deleteBtn.text("x");
        deleteBtn.addClass("delete btn btn-danger");
        var editBtn = $("<button>");
        editBtn.text("EDIT");
        editBtn.addClass("edit btn btn-info");
        var newReviewTitle = $("<h2>");
        var newReviewDate = $("<small>");
        var newReviewLandlord = $("<h5>");
        newReviewLandlord.css({
            float: "right",
            color: "blue",
            "margin-top": "-10px"
        });
        var newReviewCardBody = $("<div>");
        newReviewCardBody.addClass("card-body");
        var newReviewBody = $("<p>");
        newReviewTitle.text(review.title + " ");
        newReviewBody.text(review.body);
        newReviewDate.text(formattedDate);
        newReviewTitle.append(newReviewDate);
        newReviewCardHeading.append(deleteBtn);
        newReviewCardHeading.append(editBtn);
        newReviewCardHeading.append(newReviewTitle);
        newReviewCardHeading.append(newReviewLandlord);
        newReviewCardBody.append(newReviewBody);
        newReviewCard.append(newReviewCardHeading);
        newReviewCard.append(newReviewCardBody);
        newReviewCard.data("review", review);
        return newReviewCard;
    }

    // This function figures out which post we want to delete and then calls deletePost
    function handleReviewDelete() {
        var currentReview = $(this)
            .parent()
            .parent()
            .data("review");
        deleteReview(currentReview.id);
    }

    // This function figures out which post we want to edit and takes it to the appropriate url
    function handleReviewEdit() {
        var currentReview = $(this)
            .parent()
            .parent()
            .data("review");
        window.location.href = "/cms?review_id=" + currentReview.id;
    }

    // This function displays a message when there are no posts
    function displayEmpty(id) {
        var query = window.location.search;
        var partial = "";
        if (id) {
            partial = " for Landlord #" + id;
        }
        reviewContainer.empty();
        var messageH2 = $("<h2>");
        messageH2.css({
            "text-align": "center",
            "margin-top": "50px"
        });
        messageH2.html(
            "No reviews yet" +
            partial +
            ", navigate <a href='/cms" +
            query +
            "'>here</a> in order to get started."
        );
        reviewContainer.append(messageH2);
    }
});
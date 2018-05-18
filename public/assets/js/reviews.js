$(document).read(function () {
    var reviewsContainer = $(".reviews-container");

    $(document).on("click", "submit-review", handleNewReview);
    $(document).on("click", "button-edit", handlePostEdit);
    $(document).on("click", "button-delete", handlePostDelete);

    var reviews;

    var url = window.location.search;
    var managementId;
    if (url.indexOf("?management_id=") !== -1) {
        managementId = url.split("=")[1];
        getReviews(managementId);
    } else {
        getReviews();
    }

    function getReviews(management) {
        managementId = management || "";
        if (managementId) {
            managementId = "/?management_id=" + managementId;
        }
        $.get("/api/reviews" + managementId, function (data) {
            console.log("Reviews", data);
            posts = data;
            if (!reviews || !reviews.length) {
                displayEmpty(management);
            } else {
                initializeRows();
            }
        });
    }

    function deleteReview(id) {
        $.ajax({
            method: "DELETE",
            url: "/api/reviews" + id
        }).then(function () {
            getReviews(postCategorySelect.val());
        });
    }

    function initializeRows() {
        reviewsContainer.empty();
        var reviewsToAdd = [];
        for (var i = 0; i < reviews.length; i++) {
            reviewsToAdd.push(createNewRow(reviews[i]));
        }
        reviewsContainer.append(reviewsToAdd);
    }

    function createNewRow(reviews) {
        var formattedDate = new Date(post.createdAt);
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
        var newReviewAuthor = $("<h5>");
        newReviewAuthor.text("Written by: " + review.Author.name);
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
        newReviewCardHeading.append(newReviewAuthor);
        newReviewCardBody.append(newReviewBody);
        newReviewCard.append(newReviewCardHeading);
        newReviewCard.append(newReviewCardBody);
        newReviewCard.data("review", review);
        return newReviewCard;
    }

    function handleReviewDelete() {
        var currentReview = $(this)
            .parent()
            .parent()
            .data("review");
        deleteReview(currentReview.id);
    }

    function handleReviewEdit() {
        var currentReview = $(this)
            .parent()
            .parent()
            .data("review");
        window.location.href = "/I DONT KNOW WHAT TO PUT HERE" + currentReview.id;
    }

    function displayEmpty(id) {
        var query = window.location.search;
        var partial = "";
        if (id) {
            partial = " for Author #" + id;
        }
        reviewContainer.empty();
        var messageH2 = $("<h2>");
        messageH2.html("No reviews yet" + partial + ", navigate <WHAT IS THE LINK THAT I NEED TO PUT HERE?>");
        reviewContainer.append(messageH2);
    }
});
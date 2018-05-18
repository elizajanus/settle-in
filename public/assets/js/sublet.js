$(document).read(function () {
    var subletContainer = $(".sublet-container");

    $(document).on("click", "submit-sublet", handleNewReview);
    $(document).on("click", "button-edit", handlePostEdit);
    $(document).on("click", "button-delete", handlePostDelete);

    var sublet;

    var url = window.location.search;
    var subletId;
    if (url.indexOf("?sublet_id=") !== -1) {
        subletId = url.split("=")[1];
        getReviews(subletId);
    } else {
        getReviews();
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

    function handleSubletDelete() {
        var currentSublet = $(this)
            .parent()
            .parent()
            .data("review");
        deleteReview(currentReview.id);
    }

    function handleSubletEdit() {
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
        subletContainer.empty();
        var messageH2 = $("<h2>");
        messageH2.html("No sublet yet" + partial + ", navigate <WHAT IS THE LINK THAT I NEED TO PUT HERE?>");
        subletContainer.append(messageH2);
    }
});

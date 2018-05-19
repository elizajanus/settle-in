//code to post a new profile to Roommates table

$(document).ready(function() {
  var surveyJSON = {
    pages: [{
      name: "roommate creator",
      elements: [{
        type: "text",
        name: "name",
        title: "Please enter your name:",
        isRequired: true,
        placeHolder: "Jon Snow"
      }, {
        type: "text",
        name: "email",
        title: "Your e-mail:",
        isRequired: true,
        validators: [{
          type: "email"
        }],
        inputType: "email",
        placeHolder: "jon.snow@nightwatch.org"
      }, {
        type: "text",
        name: "age",
        title: "Your age:",
        isRequired: true,
        inputType: "number"
      }, {
        type: "text",
        name: "phone",
        title: "Your phone number:",
        inputType: "tel",
        placeHolder: "xxx-xxx-xxxx"
      }, {
        type: "text",
        name: "gender",
        title: "Your gender (male/female/other):",
        isRequired: true,
        placeHolder: "female"
      }]
    }]
  }

  function sendDataToServer(results) {
    $.post("/api/roommates", results.data)
      .then(function (data) {
        alert("The results are:" + JSON.stringify(survey.data));
      }).catch(function (error) {
        alert(error);
      })
  };

  var survey = new Survey.Model(surveyJSON);
  $("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
  });
});

//code for getting roommate profiles -- incomplete
/*function getRoommates() {
  $.get("/api/roommmates", function(data) {
    console.log("Roommates", data);
    roommates = data;
      initializeRows();
  });
}
// incomplete
function initializeRows() {
  roommateContainer.empty();
  var roommatesToAdd = [];
  for (var i = 0; i < roommates.length; i++) {
    roommatesToAdd.push(createNewRow(posts[i]));
  }
  roommateContainer.append(roommatesToAdd);
}*/



//code for search function
//layout: 2 dropdowns on top of page above an array of roommate profiles
//WILL THIS WORK AT ALL IDK ??? 

/*
var smoking = $("#searchfieldsmoking").val();
var pets = $("#searchfieldpets").val();

if (smoking === "non-smoking" && pets === "has pets") {
  Roommates.findAll({
    where: {
      smoking: 0,
      pets: 1
    }
  });
} else if (smoking === "non-smoking" && pets === "no pets") {
  Roommates.findAll({
    where: {
      smoking: 0,
      pets: 0
    }
  });
} else if (smoking === "smoking" && pets === "has pets") {
  Roommates.findAll({
    where: {
      smoking: 1,
      pets: 1
    }
  });
} else if (smoking === "smoking" && pets === "no pets") {
  Roommates.findAll({
    where: {
      smoking: 1,
      pets: 0
    }
  });
};

*/



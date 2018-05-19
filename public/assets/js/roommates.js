//code to post a new profile to Roommates table

$(document).ready(function () {
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

//code for search function
//layout: dropdown on top of page above an array of roommate profiles

if ($("#searchfield").val() === "non-smoking") {
  
}


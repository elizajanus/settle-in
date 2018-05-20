$(document).ready(function () {
  // survey.clear();
  // survey.render();

  var surveyJSON = {
    locale: "en",
    title: "Roommate Survey",
    pages: [{
      name: "page1",
      elements: [{
        type: "boolean",
        name: "question1",
        label: "Are you a smoker?"
      }, {
        type: "boolean",
        name: "question2",
        label: "Do you have pets?"
      }, {
        type: "boolean",
        name: "question3",
        label: "Are you ok with a ground floor apartment?"
      }, {
        type: "boolean",
        name: "question4",
        label: "Are you a night owl (do you enjoy staying up late at night)?"
      }, {
        type: "boolean",
        name: "question5",
        label: "Do you like a clean apartment?"
      }, {
        type: "boolean",
        name: "question6",
        label: "Do you like to entertain your friends at your apartment often?"
      }, {
        type: "boolean",
        name: "question7",
        label: "Are you religious?"
      }, {
        type: "boolean",
        name: "question8",
        label: "Do you prefer a same gender roommate?"
      }, {
        type: "radiogroup",
        name: "question9",
        title: "Do you have any of the following allergies?",
        choices: [{
          value: 1,
          text: "Peanuts"
        }, {
          value: 2,
          text: "Cat"
        }, {
          value: 3,
          text: "Dog"
        }, {
          value: 4,
          text: "Indoor plants"
        }, {
          value: 5,
          text: "None"
        }]
      }, {
        type: "boolean",
        name: "question10",
        label: "Are you in a serious relationship?"
      }, {
        type: "boolean",
        name: "question11",
        label: "Are you ok if your roommate is in a serious relationship?"
      }, {
        type: "boolean",
        name: "question12",
        label: "Do you like to split grocery bills?"
      }, {
        type: "boolean",
        name: "question13",
        label: "Are you ok with sharing a bathroom?"
      }, {
        type: "boolean",
        name: "question14",
        label: "Do you like to cook?"
      }, {
        type: "radiogroup",
        name: "question15",
        title: "Price range for your share of the rent:",
        choices: [{
          value: 1,
          text: "0 - $300"
        }, {
          value: 2,
          text: "$301 - $600"
        }, {
          value: 3,
          text: "$601 - $900"
        }, {
          value: 4,
          text: "$901 +"
        }]
      }, {
        type: "boolean",
        name: "question16",
        label: "Are you a vegetarian or vegan?"
      }, {
        type: "radiogroup",
        name: "question17",
        title: "Personality:",
        choices: [{
          value: 1,
          text: "Type A - in charge"
        }, {
          value: 2,
          text: "Slightly more relaxed"
        }, {
          value: 3,
          text: "Fairly relaxed"
        }, {
          value: 4,
          text: "Totally laid back"
        }]
      }, {
        type: "boolean",
        name: "question18",
        label: "Do you have any children?"
      }, {
        type: "radiogroup",
        name: "question19",
        title: "How much free time do you spend at home?",
        choices: [{
          value: 1,
          text: "I spend almost all of my time at home"
        }, {
          value: 2,
          text: "I spend 50 - 75% of my free time at home."
        }, {
          value: 3,
          text: "I spend 20 - 50% of my free time at home."
        }, {
          value: 4,
          text: "I am always out doing something in my free time."
        }]
      }, {
        type: "boolean",
        name: "question20",
        label: "Do you work from home?"
      }]
    }],
    cookieName: "Roommate",
    sendResultOnPageNext: true,
    showQuestionNumbers: "off"
  }
  // var roommateScores = [];

  function sendDataToServer(survey) {
    console.log(survey.data);

    //send Ajax request to your web server.
    $.post("/api/survey", survey.data)
    .then(function (data) {
      // survey.clear();
      // survey.render();
        
        // for (var i = 0; i < data.length; i++) {
        //   roommateScores = data[i];
        // }
        // for (var j = 0; j < roommateScores.length; j++) {
        //   var currentRoommate = roommateScores[j];
        //   var nextRoommate = roommateScore[j+1];
        //   if(nextRoommate === currentRoommate) {
        //     difference = 0;
        //   } else {
        //     difference = 1;
        //   }
        //   totalDifference += difference;

        // }
        // console.log(currentRoommate.name);
        console.log("working also");
        alert("The results are:" + JSON.stringify(survey.data));
        survey.clear();
        survey.render();
      }).catch(function (error) {
        alert(error);
      });
  }

  var survey = new Survey.Model(surveyJSON);
  console.log("did it get here?");
  $("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
  });
});
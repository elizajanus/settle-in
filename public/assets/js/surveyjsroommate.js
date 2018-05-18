$(document).ready(function() {
    var surveyJSON = {pages:[{name:"roommate creator",elements:[{type:"text",name:"Roommate Finder Survey",title:"Please enter your name:",isRequired:true,placeHolder:"Jon Snow"},{type:"text",name:"email",title:"Your e-mail:",isRequired:true,validators:[{type:"email"}],inputType:"email",placeHolder:"jon.snow@nightwatch.org"},{type:"text",name:"age",title:"Your age:",isRequired:true,inputType:"number"},{type:"text",name:"phone",title:"Your phone number:",inputType:"tel",placeHolder:"xxx-xxx-xxxx"},{type:"text",name:"gender",title:"Your gender (male/female/other):",isRequired:true,placeHolder:"female"}]}]}

function sendDataToServer(results) {
    $.post("/api/survey", results.data)
        .then(function(data) {
            alert("The results are:" + JSON.stringify(survey.data));
        });
    //alert("The results are:" + JSON.stringify(survey.data));
};

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});
});
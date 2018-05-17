//non-functional placeholder file to later add to survey html page

//for html
<!-- Your platform (jquery) scripts. -->

<link href="https://surveyjs.azureedge.net/1.0.22/survey.css" type="text/css" rel="stylesheet" />
<script src="https://surveyjs.azureedge.net/1.0.22/survey.jquery.min.js"></script>


//html
<div id="surveyContainer"></div>


//javascript
var surveyJSON = {pages:[{name:"page1",elements:[{type:"text",name:"Roommate Finder Survey",title:"Please enter your name:",isRequired:true,placeHolder:"Jon Snow"},{type:"text",name:"email",title:"Your e-mail:",isRequired:true,validators:[{type:"email"}],inputType:"email",placeHolder:"jon.snow@nightwatch.org"},{type:"text",name:"age",title:"Your age:",isRequired:true,inputType:"number"},{type:"text",name:"phone",title:"Your phone number:",inputType:"tel",placeHolder:"xxx-xxx-xxxx"},{type:"text",name:"gender",title:"Your gender (male/female/other):",isRequired:true,placeHolder:"female"}]}]}

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});
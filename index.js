var button = document.getElementById("click-me");
var body = document.getElementById("my-web-page");

var colors = ["red", "green", "blue", "yellow", "purple","orange"];

button.addEventListener("click", function(){
    var color_picker = Math.floor(Math.random() * 5);
    document.getElementById("color-indicator").innerHTML=colors[color_picker];
    body.style.backgroundColor=colors[color_picker];
})


var new_paragraph = document.getElementById("new-note");

var paragraph_element = document.createElement("h1");
var element_text = document.createTextNode("Books and Teaching");

paragraph_element.appendChild(element_text);
new_paragraph.appendChild(paragraph_element);


function mytime(){
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();

    var session = "AM";

    if(hour==0){
        hour = 12;
    }

    if(hour>12){
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10)?"0"+hour:hour;
    minutes = (minutes < 10)?"0"+minutes:minutes;
    seconds = (seconds < 10)?"0":seconds;

    var time = hour + ":" + minutes + ":" + seconds + " " + session;

    document.getElementById("time-display").innerText=time;

    setInterval(mytime, 1000);
};

var USER_ID = "43c56e3c107147d5b2c1a24f608462";
var ACCESS_PORT = "50009";

var URL = "http://prova.scytlbrasil.com:81/Api/tasks?userid=" + USER_ID;

getItems();

function getItems() {
    console.log("FOI");
    var request = new XMLHttpRequest();

    request.open("GET", URL, true);

    request.onload = function() {
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            console.log(data);
        }
        else {
            console.log("ERROR");
        }
    }

    request.send();
}

function createSchedule() {
    location.href = "templates/create_schedule.html";
}

const USER_ID = "43c56e3c107147d5b2c1a24f608462";
const URL = "prova.scytlbrasil.com:81/Api/tasks?userid="

var url = "http://" + URL + USER_ID;

getItems();

function getItems() {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onload = function() {
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            console.log(this.response);
            console.log('data: ' + data);
        } else {
            console.log('error');
        }
    }
    request.send();
}

function createSchedule() {
    location.href = "templates/create_schedule.html";
}

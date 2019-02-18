var USER_ID = "43c56e3c107147d5b2c1a24f608462";
var ACCESS_PORT = "50009";

var url = "http://prova.scytlbrasil.com:81/Api/tasks?userid=" + USER_ID;


getItems();

function getItems() { 
    $.get(url, function(data, status) {
        console.log("aqui");
        console.log("data: " + data);
        console.log("status: " + status);
    });
}

function createSchedule() {
    location.href = "templates/create_schedule.html";
}

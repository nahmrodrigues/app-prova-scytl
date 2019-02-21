const USER_ID = "43c56e3c107147d5b2c1a24f608462";
const URL = "prova.scytlbrasil.com:81/Api/tasks/"

var url = "http://" + URL;

processData(getId());

function getId() {
    var parameters = location.search.substring(1).split('?');

    var temp = parameters[0].split("=");
    id = unescape(temp[1]);
    
    return id;
}

function processData(id) {
    var request_url = url + "GetTask?id=" + id + "&userid=" + USER_ID;

    var request = new XMLHttpRequest();
    request.open("GET", request_url, true);
    request.onload = function() {
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
           loadData(data);
        }
    }
    request.send();
}

function loadData(data) {
    var form = document.getElementById("edit-form");

    form.elements.item(0).value = data.Title;
    form.elements.item(1).value = data.Description;

    if(data.Completed == true) {
        form.elements.item(2).checked = true;
    }
    else {
        form.elements.item(3).checked = true;
    }

    var deadline = data.Deadline.split('T');

    form.elements.item(4).value = deadline[0];
}

function editSchedule(id) {
    var request_url = url + "EditTask?id=" + id + "&userid=" + USER_ID;

    var request = new XMLHttpRequest();
    request.open("POST", request_url, true);
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-type", "application/json");
    request.onload = function() {
        console.log(this.responseText);

        if (request.status >= 200 && request.status < 400) {
            location.href = "../index.html";
        }
    }
    request.send(getData());
}

function getData() {
    var form = document.getElementById("edit-form");

    let data = {};

    for(i = 0; i < form.elements.length; i++) {
        data[form.elements.item(i).name] = form.elements.item(i).value;
    }

    if(form.elements.item(2).checked == true) {
        data["completed"] = true;
    }
    else {
        data["completed"] = false;
    }

    return JSON.stringify(data);
}
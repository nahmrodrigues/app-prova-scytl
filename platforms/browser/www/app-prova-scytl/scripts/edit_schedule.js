const USER_ID = "43c56e3c107147d5b2c1a24f608462";
const URL = "http://prova.scytlbrasil.com:81/Api/tasks/";

processData(getId());

function getId() {
    var parameters = location.search.substring(1).split("?");

    var temp = parameters[0].split("=");
    id = unescape(temp[1]);
    
    return id;
}

function processData(id) {
    var url = URL + "GetTask?id=" + id + "&userid=" + USER_ID;

    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            console.log(this.responseText); 
            loadData(JSON.parse(this.response));
        }
        else {
            console.log("Error");
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
    else if (data.Completed == false) {
        form.elements.item(3).checked = true;
    }

    if (data.Deadline != null) {
        var deadline = data.Deadline.split('T');
        form.elements.item(4).value = deadline[0];
    }
    
}

function validateForm() {
    var x = document.forms["edit-form"]["title"].value;
    if (x == "") {
        alert("Name must be filled out");
    }
    else {
        editSchedule(getId());
    }
}

function editSchedule(id) {
    var url = URL + "EditTask?id=" + id + "&userid=" + USER_ID;

    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-type", "application/json");
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            console.log(this.responseText);
            goHome();
        }
        else {
            console.log("Error");
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
    else if (form.elements.item(3).checked == true) {
        data["completed"] = false;
    }
    else {
        data["completed"] = null;
    }

    return JSON.stringify(data);
}

function deleteSchedule(id) {
    var url = URL + "RemoveTask?id=" + id + "&userid=" + USER_ID;

    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-type", "application/json");
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            console.log(this.responseText);
            goHome();
        }
        else {
            console.log("Error");
        }
    }
    request.send();
}

function goHome() {
    location.href = "../../index.html";
}

function goCreate() {
    location.href = "create_schedule.html";
}
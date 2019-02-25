const USER_ID = "43c56e3c107147d5b2c1a24f608462";
const URL = "http://prova.scytlbrasil.com:81/Api/tasks/PostTask?userid=";

var url = URL + USER_ID;

function validateForm() {
    var x = document.forms["create-form"]["title"].value;
    if (x == "") {
        alert("Name must be filled out");
    }
    else {
        createSchedule();
    }
}

function createSchedule() {
    var request = new XMLHttpRequest();
    request.open("POST", url, true);  
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-type", "application/json");
    request.onload = function() {
        
        if (request.status >= 200 && request.status < 400) {
            console.log(this.responseText);
            goHome();
        }
    }
    request.send(getData());
}

function getData() {
    var form = document.getElementById("create-form");

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

    data["userid"] = USER_ID;

    console.log(data);

    return JSON.stringify(data);
}

function goHome() {
    location.href = "../../index.html";
}

function goCreate() {
    location.href = "create_schedule.html";
}
const USER_ID = "43c56e3c107147d5b2c1a24f608462";
const URL = "prova.scytlbrasil.com:81/Api/tasks/PostTask?userid=";

var url = "http://" + URL + USER_ID;

function createSchedule() {
    var form = document.getElementById("create-form");

    var formData = new FormData(form);
    formData.append('userid', USER_ID);

    let data = {};

    for (const [key, value]  of formData.entries()) {
        dataJson[key] = value;
    }

    var request = new XMLHttpRequest();
    request.open("POST", url, true);  
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-type", "application/json")
    request.onload = function() {
        console.log("post");
        console.log(this.responseText);
    }
    request.send(JSON.stringify(data));
}
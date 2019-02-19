const USER_ID = "43c56e3c107147d5b2c1a24f608462";
const URL = "prova.scytlbrasil.com:81/Api/tasks/PostTask";

var url = "http://" + URL;

function createSchedule() {
    var form = document.getElementById("create_form");

    var formData = new FormData(form);
    formData.append('userid', USER_ID);

    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.onload = function() {
        console.log("post");
        console.log(this.responseText);
    }
    request.send(formData);

    location.href = "../index.html";
}
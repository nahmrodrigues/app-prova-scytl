const USER_ID = "43c56e3c107147d5b2c1a24f608462";
const URL = "prova.scytlbrasil.com:81/Api/tasks/GetTask?"

var url = "http://" + URL;

processData(getId());

function getId() {
    var parameters = location.search.substring(1).split('?');

    var temp = parameters[0].split("=");
    id = unescape(temp[1]);
    
    return id;
}

function processData(id) {
    var request_url = url + "id=" + id + "&userid=" + USER_ID;

    var request = new XMLHttpRequest();
    request.open("GET", request_url, true);
    request.onload = function() {
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {

            var title = document.getElementById("title");
            var description = document.getElementById("description");
            var completed_yes = document.getElementById("completed-yes");
            var completed_no = document.getElementById("completed-no");
            var deadline = document.getElementById("deadline");

        }
    }
    request.send();
}
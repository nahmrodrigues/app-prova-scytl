const USER_ID = "43c56e3c107147d5b2c1a24f608462";
const URL = "prova.scytlbrasil.com:81/Api/tasks?userid="

var url = "http://" + URL + USER_ID;

getItems();

function getItems() {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onload = function() {
        var data = JSON.parse(this.response);
        var content = document.getElementById("content");

        var i = 1;

        if (request.status >= 200 && request.status < 400) {
            data.forEach(task => {

                var form = document.createElement("form");
                form.setAttribute("action", "layout/edit_schedule.html");
                form.setAttribute("id", task.Id);

                var hiddenInput = document.createElement("input");
                hiddenInput.setAttribute("type", "hidden");
                hiddenInput.setAttribute("name", "id");
                hiddenInput.setAttribute("value", task.Id);

                var input = document.createElement("input");
                input.setAttribute("type", "submit");
                input.setAttribute("value", "Schedule nº " + i);
                input.setAttribute("class", "btn btn-default btn-block");

                form.appendChild(hiddenInput);
                form.appendChild(input);

                content.appendChild(form);

                i = i+1;
            });
        } else {
            console.log("Error");
        }
    }
    request.send();
}

function createSchedule() {
    location.href = "layout/create_schedule.html";
}

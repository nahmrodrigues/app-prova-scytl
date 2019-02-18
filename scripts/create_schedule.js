const USER_ID = "43c56e3c107147d5b2c1a24f608462";
const ACCESS_PORT = "50009";

const URL = "http://prova.scytlbrasil.com/Api/tasks/PostTask";

function createSchedule() {
    var form = document.getElementById("create_form");

    const formData = new FormData(form);
    formData.append('userid', USER_ID);

    let dataJson = {};

    for (const [key, value]  of formData.entries()) {
        dataJson[key] = value;
    }
}
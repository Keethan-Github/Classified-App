
function showloginmodal() {

    const loginmodel = document.getElementById('login-modal');
    const bootstrapModel = new bootstrap.Modal(loginmodel);
    bootstrapModel.show();

}

function login() {
    //alert("ok");

    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    const form = new FormData();
    form.append("email", email);
    form.append("password", password);

    const request = new XMLHttpRequest;
    request.onreadystatechange = function () {

        if (request.readyState == 4) {
            const response = request.responseText;
            
            if (response == "Success") {
                alert('Log in success')
            } else {
                alert(response);
            }
        }
    };

    request.open("post", "loginProcess.php", true);
    request.send(form);

}
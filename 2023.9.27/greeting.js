document.addEventListener("DOMContentLoaded", function() {
    const frmLogin = document.querySelector("#frmLogin");
    const inputLogin = document.querySelector("#frmLogin input");
    const greeting = document.getElementById("greeting");
    const HIDDEN_CLASSNAME = "hidden";
    const KEY_USERNAME = "userName";

    function Clickbutton(event) {
        event.preventDefault();
        frmLogin.classList.add(HIDDEN_CLASSNAME);
        const userName = inputLogin.value;
        localStorage.setItem(KEY_USERNAME, userName);
        displayHello(userName);
    }

    function displayHello(argName) {
        const greeting = document.getElementById("greeting");
        if (greeting) {
            greeting.innerText = `Hello ${argName}`;
            greeting.classList.remove(HIDDEN_CLASSNAME);
        }
    }

    const lsuserName = localStorage.getItem("userName");

    console.log(lsuserName);

    if (lsuserName === null) {
        frmLogin.classList.remove(HIDDEN_CLASSNAME);
        frmLogin.addEventListener("submit", function(event) {
            Clickbutton(event);
        });
    } else {
        displayHello(lsuserName);
    }
});

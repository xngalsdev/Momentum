document.querySelector("#frmLogin");
const frmLogin = document.querySelector("#frmLogin");
const inputLogin = document.querySelector("#frmLogin input");
const hello = document.getElementById("hello");
const HIDDEN_CLASSNAME = "hidden";
const KEY_USERNAME = "userName";

/**
 * 이름을 입력받는 버튼 함수
 */
function Clickbutton(event){
    event.preventDefault();
    frmLogin.classList.add(HIDDEN_CLASSNAME);
    const userName = inputLogin.value;
    localStorage.setItem(KEY_USERNAME, userName);
    displayHello(userName);
}
/**
 * Hello **을 출력하는 함수
 */
function displayHello(argName){
    hello.innerText = `hello ${argName}`;
    //hello.classList.remove("hidden");
    hello.classList.remove(HIDDEN_CLASSNAME);
  }
  
const lsuserName = localStorage.getItem("userName");

if (lsuserName === null){
    frmLogin.classList.remove(HIDDEN_CLASSNAME);
    frmLogin.addEventListener("submit", Clickbutton);
}
else{
    displayHello(lsuserName);
} 
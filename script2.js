document.querySelector("#frmLogin");
const frmLogin = document.getElementById("frmLogin");
const inputLogin = frmLogin.querySelector("input");
const btnLogin = frmLogin.querySelector("button");
const hi = document.getElementById("hello");

//로그인 버튼 눌렀을 때 "Click" 출력
function Clickbutton(event){
    event.preventDefault();
    frmLogin.classList.add("hidden");
    const userName = inputLogin.value;
    localStorage.setItem("userName", userName);
    //console.log("Click");
    //console.dir(inputLogin);
    hi.innerText = (`${userName}아 안녕?`);
    hi.classList.remove("hidden");
    //console.log("hello",inputLogin.value);
    /*if (inputLogin.value ==="") {
        alert("이름을 입력하세요");
    }
    else if (inputLogin.value.length > 19){
        alert("이름이 너무 깁니다");
    }
    else{
        console.log("Click");
        console.dir(inputLogin);
        console.log("hello",inputLogin.value);
        hi.innerText = (`${inputLogin.value}아 안녕?`);
    }*/
}
btnLogin.addEventListener("click", Clickbutton);

const lsuserName = localStorage.getItem("userName");

if (lsuserName === null){
    frmLogin.classList.remove("hidden");
}
else{
    frmLogin.classList.add("hidden");
    hi.classList.remove("hidden");
    hi.innerText = (`${lsuserName}아 안녕?`);
} 
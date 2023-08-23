/*function sayHello(name,age){
    console.log(`안녕, 내 이름은 ${name}(이)고, 나이는 ${age}살이야`);
}

sayHello("승민",19);

function plus(x,y){
    console.log(x+y);
}
plus(2,5);

function minus(x,y){
    console.log(x-y);
}
minus(4,2);

const plyaer = {
    name:"justice",
    points:1500,
    isBeauty:true,
    age:27
    Hello :function(xx){
        console.log(`안녕 ${xx}야`)
    }
}

const calculator = {
    plus : function(x,y){
        console.log(x+y);
    },
    minus : function(x,y){
        console.log(x-y);
    },
    multi : function(x,y){
        console.log(x*y);
    },
    divide : function(x,y){
        console.log(x/y);
    },
    powerOf : function(x,y){
        console.log(x**y);
    }
};
calculator.plus(2,5);
calculator.minus(6,2);
calculator.multi(2,4);
calculator.divide(6,3);
calculator.powerOf(3,6);


const age = parseInt(prompt("나이를 입력하세요"));
if ((isNaN(age)) ||(age < 0)) {
    console.log("정확한 숫자를 입력하세요");
}else if (age < 19) {
    console.log("아직 어립니다");
}
else if (age >= 19 && age <50){
    console.log("음주가 가능합니다.");
}
else if (age >=50 && age <80){
    console.log("운동하십시오");
}
else{
    console.log("마음대로 하십시오");
}


const age = parseInt(prompt("점수를 입력하세요."));
if ((isNaN(age)) || (age <0)){
    console.log("정확한 숫자를 입력하세요.");
}
else if ((age>=91) && (age <=100)){
    console.log("A");
}
else if ((age>=81) && (age <=90)){
    console.log("B");
}
else if ((age >=71) && (age <=80)){
    console.log("C");
}
else if ((age >=61) && (age <=70)){
    console.log("D");
}
else{
    console.log("F");
}


function isLeapYear(year){
    return (year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)
}
const year = (parseInt(prompt("현재년도를 입력 하세요.")));
console.log(`${year}년도는 윤년일까요? == ${isLeapYear(year)}`);


const testArray = [52,25,22,25,2,12,3,42,7,42]
function min(array){
    let output = array[0];
    for (const item of array){
        if (output > item){
            output = item;
        }
    }
    return output;
}
console.log(`${testArray} 중에서`);
console.log(`최솟값 : ${array[item]}`);
*/
const h1 = document.querySelector("h1");
const hello = document.querySelector(".hello h1");
console.log(title);
function handleClickHello(){
    console.log("Grab Me Clicked!");
    if (hello.style.color === "blue"){
        hello.style.color = "tomato";
    }
    else {
        hello.style.color = "blue";
    }
};
hello.addEventListener("click", handleClickHello);

function handleMouseLeave(){
    console.log("mouse is leave");
    title.textContent = "Grab Me!";
}
title.addEventListener("mouseleave", handleMouseLeave);

const hellos = document.querySelector(".hellos h1");
console.log(hellos);

function mouseentertltle(){
    console.log("div has mouse");
    h1.textContent = "Got You!";
};
title.addEventListener("mouseenter", mouseentertltle);

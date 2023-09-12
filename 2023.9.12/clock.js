const clock = document.querySelector("h1#clock");

/**
 * 시각을 나타내는 함수
 */
function getclock(){
    const date = new Date();

    /*const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');
    */
    clock.innerText = (`${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}:${String(date.getSeconds()).padStart(2, '0')}`);
}

setInterval(getclock,1000);
const clock = document.querySelector(".article8 .date h3");

function myClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const mins = String(date.getMinutes()).padStart(2,"0");
    const secs =String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours}:${mins}:${secs}`;
}

myClock();
setInterval(myClock,1000);

// setTimeout(myClock,2000);
let hour=document.querySelector("#hour");
let minute=document.querySelector("#minute");
let second=document.querySelector("#second");

let myHourse=Number(hour.innerText);
let myMinute=Number(minute.innerText);
let mySecond=Number(second.innerText);

let interval=setInterval(Time,1000);

function Time() {
    // let date=new Date();
    // console.log(date);

    mySecond +=1;
    if (mySecond===60) {
        myMinute+=1;
        mySecond=0;
    }
    
    if (myMinute===60) {
        myHourse+=1;
        myMinute=0;
    }
    if(myHourse===24){
        myHourse=0;
        myMinute=0;
        mySecond=0;
    }

    hour.innerHTML = myHourse;
    minute.innerHTML = myMinute;
    second.innerHTML = mySecond;

    if ((myHourse>=0 && myHourse<10)&&(myMinute>=0 && myMinute<10) && (mySecond>=0 && mySecond<10)) {
        second.innerHTML = `0${mySecond}`;
        minute.innerHTML = `0${myMinute}`;
        hour.innerHTML = `0${myHourse}`;
        // console.log(`0${myHourse}:0${myMinute}:0${mySecond}`);
        return;
    }
    else if ((myHourse>=0 && myHourse<10) && (mySecond>=0 && mySecond<10)) {
        hour.innerHTML = `0${myHourse}`;
        second.innerHTML = `0${mySecond}`;
        // console.log(`0${myHourse}:${myMinute}:0${mySecond}`);
        return;
    }
    else if ((myHourse>=0 && myHourse<10)&&(myMinute>=0 && myMinute<10) ) {
        hour.innerHTML = `0${myHourse}`;
        minute.innerHTML = `0${myMinute}`;
        // console.log(`0${myHourse}:0${myMinute}:${mySecond}`);
        return;
    }
    else if ((mySecond>=0 && mySecond<10) && (myMinute>=0 && myMinute<10)) {
        second.innerHTML = `0${mySecond}`;
        minute.innerHTML = `0${myMinute}`;
        // console.log(`${myHourse}:0${myMinute}:0${mySecond}`);
        return;
    }
    else if (myHourse>=0 && myHourse<10) {
        hour.innerHTML = `0${myHourse}`;
        // console.log(`0${myHourse}:${myMinute}:${mySecond}`);
        return;
    }
    else if (myMinute>=0 && myMinute<10) {
        minute.innerHTML = `0${myMinute}`;
        // console.log(`${myHourse}:0${myMinute}:${mySecond}`);
        return;
    }
    else if (mySecond>=0 && mySecond<10) {
        second.innerHTML = `0${mySecond}`;
        // console.log(`${myHourse}:${myMinute}:0${mySecond}`);
        return;
    }
    
    // console.log(`${myHourse}:${myMinute}:${mySecond}`)
}


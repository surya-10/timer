const day =document.querySelector("#days");
const minu=document.querySelector("#min");
const secs=document.querySelector("#sec");
const hrs=document.querySelector("#hours");

function reloadTime(){
    const currentYear = new Date().getFullYear();

    let waitingMonth = new Date(`May 11 ${currentYear} 00:00:00`);


    let cd = new Date();
    let diff = waitingMonth-cd;
    let d = Math.floor(diff/1000/60/60/24);
    let h = Math.floor((diff/1000/60/60)%24);
    let m = Math.floor((diff/1000/60)%60);
    let s = Math.floor((diff/1000)%60);
    days.innerHTML = d<10?'0'+d:d;
    minu.innerHTML=m<10?'0'+m:m;
    secs.innerHTML=s<10?'0'+s:s;
    hrs.innerHTML=h<10?'0'+h:h;

    
    // setTimeout(reloadTime, 1000);
}
// reloadTime();
setInterval(reloadTime, 1000);
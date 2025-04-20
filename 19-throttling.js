// Difference between 2 function calls is the delay/time specified

let ctr=0;
const machineGunShot = () =>{
    console.log(`shot fired ${ctr++}`);
}

const throttle = (fn,duration) => {
    console.log('throttle called');
    let flag = true;
    return function(){
        if(flag){
            fn.apply();
            flag=false;
            setTimeout(()=>{
                flag=true;
            },duration);
        }
    }
}

// NOTE - throttle is not a keyword
const throttleClick = throttle(machineGunShot,2000);

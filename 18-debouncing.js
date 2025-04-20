// Debouncing is a technique that delays the execution of a function call preventing it from being called repeatedly within a short timeframe. It is used to optimize performance and user experience by limiting the number of function calls, especially when triggered by events like user input or window resizing.

// difference between the 2 key strokes should be the delay specified.

let ctr = 0;
const getData = () => {
    console.log(`getData called ${ctr++}`);
}

let debounce = (fn,delay) => {
    console.log('debounce called');
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply();
        },delay)
    }
}

// NOTE - debounce is not a keyword
const betterFunction = debounce(getData,3000);


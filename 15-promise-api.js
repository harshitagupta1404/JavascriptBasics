// Example written in notebook

//  1. Promise.all (all/none) - to make parallel API calls and handle multiple promises together.
// It will take iterable and argument (an array of promises) [p1,p2,p3]
// It returns an array with output of all promises 
// (NOTE - If all success - it waits for all the promises to finish)
// (If one of them gets rejected - as soon as anyone gets rejected, prmomise.all will throw an error which is same as error received from rejected promise). It won't wait for other promises.

// 2. Promise.allsettled() - to make parallel API calls and handle multiple promises together.
// It will take iterable and argument (an array of promises) [p1,p2,p3]
// It will always be an array with output of all promises.
// (NOTE - If all success - it waits for all the promises to finish)
// (If one of them gets rejected - still it will wait for all the promises to settle and return an output for them)

// 3. Promise.race() - [p1,p2,p3]
// It will return the result(value/error) from first settled promise.

// 4. Promise.any() - [p1,p2,p3]
// waits for first success. If all of them fail, it will return array of all failures.

const p1 = new Promise((resolve)=>{
    setTimeout(()=>resolve('P1 success'),3000)
})

const p2 = new Promise((resolve)=>{
    setTimeout(()=>resolve('P2 success'), 1000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => { 
        resolve('P3 success') }, 2000)
})

Promise.all([p1,p2,p3]).then(
    res=> console.log(res)
)

function handlepromise(resolve, reject){
    resolve("resolved")
    reject("rejected")
}

let promise = new promise(handlepromise)
//console.log({promise});
promise.then(res => {
    console.log({res});
})


console.log("last...");
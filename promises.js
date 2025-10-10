// let promise = new Promise((resolve,reject)=>{
//     // console.log("I am a promise")
// })


// function getData(dataId,getNextData){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("Success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000)
//     });
// }


// then() & catch()

// const getPromises = () => {
//   return new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     // resolve("Success");
//     reject("Network ERROR!")
// });
// }

// let promise = getPromises();
// promise.then((res)=>{
//     console.log("Promise fullfilled",res);
// });

// promise.catch((err)=>{
//     console.log("Rejected",err);
// })


// promise chain

function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("sucess");
        },4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("sucess");
        },4000);
    });
}
// console.log("Fetching1....");
// let p1=asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("fetching2...");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{
//         console.log("data2");
//     })
// })

console.log("Fetching1....");
asyncFunc1().then((res)=>{
    console.log(res);
    console.log("fetching2...");
    asyncFunc2().then((res)=>{
        console.log("data2");
    })
})

// console.log("Fetching2....");
// let p2=asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// })
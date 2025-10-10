function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }

    }, 2000);
}
// callback hell
// getData(1,() =>{
//     getData(2,()=>{
//         getData(3);
//     });
// });

// promise chain
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Success");

        }, 2000);
    })
}

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     });
// })

// actual promise chaining
getData(1)
    .then((res) => {
        return getData(2);
    })
    .then((res) => {
        return getData(3)
    })
    .then((res) => {
        console.log(res);
    });
function api(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
    })
}
// async function getWeatherData() {
//     console.log("Getting data...."); f
//     await api(); //1st call
//     await api();
// }


// IIFE- only use for one time
(async function () {
    console.log("Getting data...."); 
    await api(); //1st call
    await api();
})();
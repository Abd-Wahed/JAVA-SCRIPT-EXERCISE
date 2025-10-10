function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum);

//this is callback function parameter hisabe call kre

calculator(1,2,(a,b)=>{  //eivabeio likha jai
    console.log(a+b);
})


// another callback
const hello =()=>{
    console.log("Hello,worl!");
}

setTimeout(hello,4000);

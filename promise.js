// Exercise - 8 promise practice
// Create a function that simulates fetching user data
// It should randomly succeed or fail after a delay
// Return a Promise that resolves with user data or rejects with an error

function fetchUserData(userId) {
  // Your code here
  // Should resolve with: { id: userId, name: "User " + userId, status: "active" }
  // Should reject with: new Error("User not found")
  // 70% success rate, 1-2 second delay
   return new Promise( (resolve,reject)=>{
      const delay = Math.floor(Math.random()*1000)+1000;
      const isSuccess =Math.random() < 0.7;
      setTimeout(()=>{
        if(isSuccess){
           resolve({
          id:userId,
          name : "user" + userId,
          status :"Active"
        });
        }else{
          reject(new Error("User not found"));
        }
      },delay)
   });
}

// Test your function with async/await

async function testFunction(userId) {
  try{
    const user = await fetchUserData(userId);
    console.log("Success:",user);
  }
  catch(error){
    console.error("Error",error.message);
  }
}
testFunction(1)
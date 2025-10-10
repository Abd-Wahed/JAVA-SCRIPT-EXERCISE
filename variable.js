// Convert these string concatenations to template literals
// const firstName = "John";
// const lastName = "Doe";
// const age = 25;

// const message1 = `Hello,  ${firstName}  ${lastName} !`;
// const message2 = `You are ${age} years old.`;
// const message3 = `In 10 years, you will be ${age + 10} .`;


// console.log(message1);
// console.log(message2);
// console.log(message3);

// Convert these functions to arrow functions
function add(a, b) {
  return a + b;
}

function isEven(num) {
  return num % 2 === 0;
}

//greet(name);
// function greet(name) {
  // console.log(`Hello,${name}`);
// }

// Your arrow function versions:
// const name1 = 'Abdul wahed';
// const add1 = (a, b) => a + b;
// console.log(add1(10,20));

const isEven1 = num => num % 2;
// console.log(isEven1(10));

// const geat = name => {
//   console.log(`Hello,${name}`)
//   return name;
// }

// console.log(geat(name1));
// geat('wahed minha')



// Given this array of products:
// const products = [
//   { name: "Laptop", price: 999.99, category: "Electronics", inStock: true },
//   { name: "Book", price: 12.99, category: "Education", inStock: true },
//   { name: "Phone", price: 699.99, category: "Electronics", inStock: false },
//   { name: "Desk", price: 299.99, category: "Furniture", inStock: true },
//   { name: "Chair", price: 199.99, category: "Furniture", inStock: true },
// ];

// Chain array methods to:
// 1. Filter only in-stock items
// 2. Filter only Electronics category
// 3. Map to get only names and prices
// 4. Sort by price (ascending)

// Your solution:
// const stock = products.filter(categori => categori.inStock);
// console.log(stock);
// const electro = products.filter(elect => elect.category === "Electronics" && elect.inStock);
// console.log(electro);


// const productInfo = products.map(product => {
//   return `${product.name}: $${product.price}`;
// });

// console.log(productInfo);
// a.name.localeCompare(b.name)	✅ For sorting by string

// const ascendingPrice = products.sort((a, b) => a.price - b.price);
// console.log(ascendingPrice);

// Extract values using destructuring
// const user = {
//   id: 1,
//   name: "John Doe",
//   email: "john@example.com",
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     zipCode: "12345",
//   },
//   preferences: {
//     theme: "dark",
//     notifications: true,
//   },
// };

// Extract: name, email, city, and theme using destructuring
// Rename theme to userTheme
// Your solution:+-
// const {
//   name,
//   email,
//   address: { city },
//   preferences: { theme: userTheme }
// } = user;

// console.log(name);
// console.log(email);
// console.log(city);
// console.log(userTheme);

// Create a function that formats a user's full name
// Parameters: firstName, lastName, title (default: "Mr./Ms.")
// Return format: "Title FirstName LastName"
// Handle missing parameters gracefully

// Your function:
// function profile(fstName, lstName, tittle = "Mr/Mrs") {
//   if (!fstName || !lstName) return `Name invalid`;

//   return `${tittle} ${fstName} ${lstName}`;
// }

// function profile2(fName, lsName, title) {
//   const formatName = `${title} ${fName} ${lsName}`
//   return formatName;
// }
// console.log(profile("Abdul", "wahed"));
// console.log(profile2("Abdul", "Wahed", "Mr"));



// exercise-07-closure practice
// Create a function that generates unique ID numbers
// Each call should return the next sequential number
// Multiple generators should be independent

function createIdGenerator(startFrom = 1) {
  // Your code here
  let id = startFrom;
  function generateId() {
    const dept = `18`;
    const batch1 = `00`;
    const uniqueId = `${id}${dept}${batch1}`;
    id++;
    return `UniqueId : ${uniqueId}`;

  };
  return generateId;
}
const getId = createIdGenerator();
console.log(getId());
console.log(getId());
console.log(getId());

// Test:
// const gen1 = createIdGenerator();
// const gen2 = createIdGenerator(100);
// console.log(gen1()); // 1
// console.log(gen1()); // 2
// console.log(gen2()); // 100
// console.log(gen1()); // 3



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
          name1 : "user" + userId,
          status1 :"Active"
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

  }
  
}
// testFunction(1);


// Exercise-09:higher order
// Create a function that takes an array of functions and a value
// Apply all functions to the value and return an array of results

function applyFunctions(functions, vale) {
  // Your code here
  return functions.map(fn=>fn(vale));
}

// Test functions:
const double = (x) => ( x * 2 );
const square = (x) => ( x * x );
const addTen = (x) => (x + 10);

// Test: applyFunctions([double, square, addTen], 5)
// Should return: [10, 25, 15]
// const result = applyFunctions([double,square,addTen],5);
// console.log(result);



// Exercise - 10 Data Transformation
// Transform this nested data structure:
const apiResponse = {
  users: [
    {
      id: 1,
      name: "John",
      posts: [
        { title: "Hello", likes: 5 },
        { title: "World", likes: 3 },
      ],
    },
    { id: 2, name: "Jane", posts: [{ title: "JavaScript", likes: 10 }] },
    { id: 3, name: "Bob", posts: [] },
  ],
};

// Transform to:
// {
//   totalUsers: 3,
//   totalPosts: 3,
//   totalLikes: 18,
//   userStats: [
//     { name: "John", postCount: 2, totalLikes: 8 },
//     { name: "Jane", postCount: 1, totalLikes: 10 },
//     { name: "Bob", postCount: 0, totalLikes: 0 }
//   ],
//   topPost: { title: "JavaScript", likes: 10, author: "Jane" }
// }

function transformData(apiResponse) {
  // Your code here
}
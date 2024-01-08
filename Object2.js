
const tinderUser = {}
tinderUser.id = "12344"
tinderUser.name ="priynaka"
tinderUser.inLoggedIn = false;



// const regularUser = {
//     email: "rutuja@gmail.com",
//     fullname: {
//         Name:{
//             name:"rutuja",
//             midde: "prem",
//             last:"Rathod",
//         }
//     }
// }
// console.log(regularUser.fullname.Name.last);
// console.log(regularUser.fullname?.Name.midde);
// console.log(regularUser.fullname.Name.name);

// const obj1 ={1:"a"}
// const obj2 ={1:"d"}
// const obj3 ={obj1 , obj2}

// console.log(obj3);



//object ASSIGN //IMPORTANT

//SPRADE OPERATOR

//OBJECT KEYS


console.log(tinderUser);

console.log(Object.keys(tinderUser)); //taking keys from object and store in the form of array

console.log(Object.values(tinderUser));//taking values from object and store in the form of array

console.log(Object.entries(tinderUser));//taking entries from object and store in the form of array

console.log(tinderUser.hasOwnProperty("inLoggedIn"));
//hasOwnProperty ====ask that if object have this element or value in on=bject or finding the any value or kywe from object





//************************************json*************************** */

// converting api data into json 
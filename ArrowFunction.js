// 1) this keyword = 2015
// this keyword tells about current Context

// const user ={
//     username:"rutuja",
//     price: 9999,

//     welcomeMsg : function(){
//         console.log(`${this.username} , welcome to website`)
//     }

// }
// user.welcomeMsg()
// user.username = "tushar"
// user.welcomeMsg()

//  console.log(this)
//return empty {}
// because follows empty object envionment 
// browser me jo global object he ohh window object he 
// // interview me pucha jata he kafi

// function chai(){
// console.log(this)
// }
// chai()
// //if we print this keyword in fiunction  then returns lot of different  values



// /+++++++++++++++++++++++++++++++++ARROW FUNCTION ++++++++++++++++++++++++++++++



// //()=>{}
//  const chai = ()=>{
//     let username = " Rutuja"
//     console.log(this)
//     }
    
//    chai()
// //---------------------------explisit-----------------------------------------------
//    const addTwo = (num1 , num2) => {
//     return num1+num2
//    }
//    console.log(addTwo(9,54))

//    //-----------------------------------------------------------------------------

// //+++++++++++++++++++++basic implisit function++++++++++++++
// //just remove curly bhraces from above arrow function
//    const addthree = (num1 , num2,num3) => num1+num2+num3
//    console.log(addthree(9,54,6723))


   //++++++++++++ Immediatly invoked function expression (IIFE)
//jo function immdiatly  execute ho jaye
///global scope ke pollution ko hatane ke liye IIFE ka use kiya hamne
//for ending IIFE function ude ;(semicolon)
(function chai(){
 console.log(`DB CONNECTION `)
})();

(function aurchai(){
    console.log(`DB CONNECTION TWO `)
   })();


   ( (name) => {
    console.log(`DB CONNECTION THREE ${name}`)
   })("rutuja");
   
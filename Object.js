// console.log("namaste guru")
// const mySym = Symbol("kay1")
const user = {
    name: "rutuja",
    Id: 12323,
    age: 18,
    email:"rutuja@gmail.com",
    lastLoginDay: ["rutu", "prem "]//can add srray also


}
// user.email = "rathod@gmail.com" // changing email from previous email
// console.log(user.name);
// console.log(user["email"])
// console.log(user["full name"])
// console.log(user[mySym])

//Object.freeze(user)// freeze the value after that we cant make changes in it

user.greeting = function(){
    console.log("hellow from user");
}
user.greetingYTwo = function(){
    console.log(`hellow from user, ${this.name}`);
}
console.log(user.greeting());
console.log(user.greetingYTwo());





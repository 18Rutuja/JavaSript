// for loop
// while loop
//do while loop


// ************for of loop**************
// const arr = [1 ,2,6,67,7,8,8,]
// for (const num of arr) {
//     console.log(num)
// }
// we can use for string also

//*********************MAP********************** */

// the map object holds key value pairs and remembers the original insersion order of the key
// const map = new Map()
// map.set('IN' , "INDIA")
// map.set('fs' , "USA")
// map.set('fr' , "FRANCE")
// map.set('rt' , "INDIA")
// console.log(map);//print in the form of key and values
// for (const key of map) {//printin the form of array
//   console.log(key);
// }

// ***********************************FOR EACH LOOOP**************************
const arr = [1 ,2,6,67,7,8,8,]
arr.forEach(function (num){
    console.log(num)
})


// by using arrowfunction
const arr2 = ["rutu", "prem", "rathod"]
arr2.forEach( (num) => {
    console.log(num)
})

// ****************PRINTME********************

function printme(item){
    console.log(item);
}
arr2.forEach(printme)


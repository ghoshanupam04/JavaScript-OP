/* High Order Array Loops */

//for-of loop:
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

//Loops using a particular sentence:
const greeting="Hello-Coders";
for (const num of greeting) {
    console.log(num);
}  

//Declare Map: Map stores unique value. This is siiler an 
const map = new Map();
map.set("India", "Delhi");
map.set("USA","United State Of America");
map.set("FR","Colombia")
console.log(map); //return an object

//try to made a loop 
for (const value of map) {
    console.log(value.keys); //print as an array 
}

//Suppose we can need the keys or value seperate:
for (const [val,keys] of map) {
    console.log("Country",keys);  // print Only the keys
    console.log("City",val);  // print Only the val
}

//Object itration:
const myobj={
    "Myname":"Anupam Ghosh",
    "Country":"India"
}

//Try it for in loop:
for(let key in myobj){
    console.log(myobj);
}
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

//Declare Forin loop:
// Use forin loop using object
for(let key in myobj){
    console.log(key); //print only the keys
    console.log(myobj[key]); //print the objects
}

//Use array in for in loop:
const myArray=["Superman","WondaWoman","Batman","Flash","Aquaman",];
for(let element in myArray){
    console.log(`The Super Hero Is: ${myArray[element]}`);
}

//We declare forin loop in map function:
const nMap= new Map();
map.set("Indai","Kolkata");
map.set("USA","London");
map.set("Asia","Japan");

for (const key in nMap) {
    console.log(key); // No print because Map are not itrable.
}

//ForEach loop:
const coding=["JS","Python","Java","Cpp","Ruby"];
coding.forEach(element => {
    console.log(`The Programming languae is: ${element}`);
});

//Another way to use Array using foreach loop:
function accessArr(item){
    console.log(item);
}
coding.forEach(accessArr); //Print the Coding Array

//Declare Object into the Array:
const MyCoding=[
    {
        "Language":"JavaScript",
        "Months":"June-July",
    },
    {
        "Language":"JAVA",
        "Months":"Aug-Sep",
    },
    {
        "Language":"Parl",
        "Months":"Oct-Nov"
    }
]
MyCoding.forEach(element => {
    console.log(`I learn Progamming languages are ${element.Language} ,
        and myMonths duration are ${element.Months}`);
});
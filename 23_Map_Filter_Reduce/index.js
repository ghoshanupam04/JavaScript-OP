/* Map Filter and Reduce */

// ForEach Loop:
const Arr=["Anupam Ghosh","Anuska Das","Bingo"];
Arr.forEach(element => {
        console.log(element); //return the array element
});

/* ForEach loop could not return any value:
//Example:
const returnValue=Arr.forEach(element => {
    console.log(element); 
    return element; // undefined
});
console.log(returnValue); //return undefined*/

//Declare Filter Functin:
const MyArr=[1,2,3,4,5,6,7,8,9,10];
const carry=MyArr.filter((value)=>(value>4))
console.log(`The Greater than 4 values are: ${carry}`);

// ForEach loop using some condition:
const MySecondArr=[]
MyArr.forEach((value)=>{
    if(value>5){
        MySecondArr.push(value)
    }
})
console.log(MySecondArr);


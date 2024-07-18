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

//Make a Exercise to Indepth learn Filter Function:
const books=[
    {
        "Book-Name":"Ikigi",
        "Price":100,
        "Country":"Japan"
    },
    {
        "Book-Name":"Hypothesis Love",
        "Price":120,
        "Country":"America"
    },
    {
        "Book-Name":"The Hungry Tide",
        "Price":150,
        "Country":"India"
    },
    {
        "Book-Name":"Murakami",
        "Price":120,
        "Country":"Spanish"
    },
    {
        "Book-Name":"The Last Bridth",
        "Price":100,
        "Country":"Spaish"
    },
]
//Check a condition
const MyBooks=books.filter((poetry)=>(poetry.Price===100)) //here we create condition
console.log(MyBooks); //print the things wich do you need.

//Check another condition
const MyBookCountry=books.filter((country)=>(country.Country==="India"))
console.log(MyBookCountry);

//Map Function:
const Numbers=[1,2,3,4,5,6,7,8,9];
const addone=Numbers.map((values)=> values+10); //Add 10 of each numbers
console.log(addone); //print that 

//Create Chaining Method;
const numbers=[1,2,3,4,5,6,7,8,9];
const chainingMethod=numbers
    .map((value)=>value*100) //After performinng operation pass this.
    .map((value)=>value+10) // Clain first value and perform operation.
    .filter((value)=> value>510) // ... 
console.log(chainingMethod);

//Declare Reduce Function:
const myNum=[1,2,3];
const totalSum=myNum.reduce((acc,carVal)=>acc+carVal ,0) //here 0 we can initial the value
console.log(`The total Value is: ${totalSum}`);

//We use Reduce Function on The Array-object;
const myDeclareArr=[
    {
        "Cource":"JavaScript",
        "Price":976,
    },
    {
        "Cource":"Java",
        "Price":2089,
    },
    {
        "Cource":"Python",
        "Price":999
    },
]

const addthePrice=myDeclareArr.reduce((acc,carVal)=>acc+carVal.Price,0)
console.log(`The Total Price of the Cource's are: ${addthePrice} Rupee`);


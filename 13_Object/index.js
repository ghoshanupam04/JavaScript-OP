/* Objects */

//Declare Object
const myObj={
    FirstName:"Anupam",
    LastName:"Ghosh",
    "fullname":"Anupam Ghosh",
    Age:21,
    //[phone]:"Motorola G40 Fusion", //declare an symbol
    Gmail:"anupamghosh@gmail.com"
};
console.log(myObj);

//Access the Object element.
console.log(myObj.FirstName);
console.log(myObj["fullname"]); //this is another method to access the object.

//change the object
myObj.Age=20;
console.log(myObj["Age"]);

//freeze:
//Object.freeze(myObj);

//in object declare a function
myObj.greeting=function(){
    console.log(`Hello Codres, I am ${this.FirstName}` );
}
console.log(myObj.greeting());

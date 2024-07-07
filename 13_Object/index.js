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


//Singelton object:
const SingletonObject=new Object();

//Non-Singleton Object:
const non_Singleton_Object={};
non_Singleton_Object.id="21BT04",
non_Singleton_Object.name="Batman",
non_Singleton_Object.gmail="bat69@gmail.com",
non_Singleton_Object.login=false,
console.log(non_Singleton_Object);

//Make object in the object /Nested Object
const nestedObject={
    FullName:{
        username:{
            first_name:"Anupam",
            last_name:"Ghosh"
        }
    }
}
console.log(nestedObject.first_name);


//Concat / Combine two objects:
const obj1={
    UserName:"Anupam_Ghosh",
    Email:"anupam@gmail.com",
    id:17301221025
}
console.log(Object.keys(obj1)); //Check the keys
console.log(Object.values(obj1)); //Check the values
console.log(Object.hasOwnProperty("Email")); //Check the values


const onj2={
    City:"Kolkata",
    State:"West Bengal"
}
const concatObj={...obj1,...onj2}; //spread
console.log(concatObj);

const concatrwo=Object.assign({},obj1,onj2); //Object.assign
console.log(concatObj);

//When we fetch some data on the server and need info then the format is :
const info=[
    {
        name:"Anupam Ghosh"
    },
    {
        roll:"21/AB/89"
    },
    {
        city:"Kolkata"
    }
]
console.log(info[2].city); //fetch data 

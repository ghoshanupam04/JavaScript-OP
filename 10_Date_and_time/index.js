//Date 

/* Declare Date */
const DeclareDate=new Date();
console.log(DeclareDate);  //Display the time and Date.
console.log(DeclareDate.toString());  //convart into string.
console.log(DeclareDate.toDateString()); //show the date.
console.log(DeclareDate.toJSON()); //print in json format
console.log(DeclareDate.toTimeString()); //show the universal time. 
console.log(DeclareDate.toLocaleString()); //declare date and time proper way.
console.log(typeof(DeclareDate)); //object format.

/* Declare your Choise Date*/
const DeclareMyDate=new Date(2024,6,3,1, 5)
console.log(DeclareMyDate.toDateString()); //Display your chosen date.
console.log((DeclareMyDate.toLocaleString()));

/* TimeStamps */
const myTimestamps=Date.now();
// console.log(myTimestamps);
// console.log(myTimestamps.getTime());


/* Get the Details */
const newDate=new Date();
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getHours());


newDate.toLocaleString('default',{
    weekday:"long",
    hour: "numeric",
})
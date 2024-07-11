/* IIFE => immediately invoked function expression */

//Declare IIFE:  
(function addtwoNum(){
    console.log("Hello Coders");
}) ();

(hello=(name)=>{
    console.log(`${name} in Gotham City`);
}) ('Batman');

(addtwonum=(num2,num1)=>{
    console.log(num2+num1); 
}) (2,6);
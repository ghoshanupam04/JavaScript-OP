/* Functins */

//Declare Function:
function fullName(){
    console.log("Anupam Ghosh");
}

fullName() //Call the function and print the fullName

//Declare function using parameaters:
function addtwoNumber(num1,num2){
    num1=10; //Parameater one
    num2=20; //Parameater two
    const add=num1+num2;
    console.log("Sum Of two number is:",add);
}
addtwoNumber() //call the function

//Declare argument manually:
function addSum(num1,num2){
    console.log(num1+num2);
}
addSum(2,3) //declare argument

//Function rules:
function FunctionRules(num1,num2){
    num1=10; 
    num2=20; 
    const add=num1+num2;
    console.log(add);
}
const rules=FunctionRules();
console.log(rules);  // o/p is undefined

//But when we use return then the value can store in console.log
function FunctionRules2(v1,v2){
    return v1+v2;
}
const result=FunctionRules2(12,3);
console.log(result); //in this case the output was print.

//Function another technique:
function userName(name ="Knight"){
    return `${name} just in.`;
}
console.log(userName()); //if we declare undefined then the bydifault print.
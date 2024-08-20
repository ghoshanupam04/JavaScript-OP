/*Lexical Scope:
=> Lexical Scoping means Declare one more function inside the existing function.*/

//MDN Documentation Example:
/*function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  } 
  init();*/

//Define own and understand that: 
function OuterFunction(){
    const name="Anupam Ghosh";  // this is a outer function.
    function innerFunction(){ // In Outer function we create a new function(innerFunction).
        console.log(name); // in this case the OuterFunction "name" property is availabe.
    }
    innerFunction() 
}  //This is called lexical Scoping
OuterFunction()

//Create another one lexical Fnction:
function One(){
    const userName="Anupam Ghosh";
    function two(){
        const email="ghoshanupam@google.com";
        function three(){
            console.log(`My name is ${userName}, \n Email is ${email}`);        
        }
        three()
    }
    two()
}
One()

/*  ***Importent**** 
In Lexical Scope, The Parent function cannot acccess the child or inner function's property, and 
 also the sibiling functions are not access there properties.*/

//Closure: 
//MDN Documentation Example:
/*function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();*/


  
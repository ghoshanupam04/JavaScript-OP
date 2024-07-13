/* CallStcak: JavaScript uses a Call Stack to track the functions in a program. 
    The call stack works on the Last In, First Out (LIFO) principle. */


//Declare Callstack:
function one(){
    console.log('One');
    two(); //call two
}
function two(){
    console.log("two");
    three();
}
function three(){
    console.log("three");
    
}

one();
two()
three();
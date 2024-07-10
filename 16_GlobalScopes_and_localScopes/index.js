/* GlobalScopes_and_localScopes */

var c=300 //Global Scope
//Block Scope 
if(true){
    let a=10;
    var b=20;
    const c=30;
}

//console.log(a);  // a not print
//console.log(b); // b not print 
console.log(c); // print 

// {}=> this called scope.

//Nested scope:
function one(){ //Senior Function
    const username="Anupam Ghosh"; 

    function two(){ //junior function
        const city="Kolkata";
        console.log(username);
    }
    console.log(city); //not exicute because it is not in the block scope.
    two() //run and print the city
}
one();


// check sme methd:
addone(); //here thet can run
function addone(){
    console.log("Hello coders");
}

console.log(addtwo); // that cna not run
const addtwo= function addontwo(){
    console.log("Hello coders");
}
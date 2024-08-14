//In JavaScript all the things are Object.

//So the big question?? Function is a object?
// => function is a function and this is also a object.
//describe this in code:
function multiplication(number){
    return number*5;
}
multiplication.power=2
console.log(multiplication(5));
console.log(multiplication.power);
console.log(multiplication.prototype); //Empry Object 


//Prototype:
const name="Anupam   ";
console.log(name.length); //Counting space and o/p given 
console.log(name.trim().length); //counting no space the exact string

const myHeros=["Spiderman","Deadpool","Wolvorin"]
const heroPower={
    Spiderman:"Siling",
    Deadpool:"Gun",
    Wolvorin:"Blade",

    SpiderPower:function(){
        console.log(`The Spiderman Power is: ${this.Spiderman}`);
    }
}
Object.prototype.me=function(){
    console.log(`I am Present in All Obejcts`);
}
heroPower.me()


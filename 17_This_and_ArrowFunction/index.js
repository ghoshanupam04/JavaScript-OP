/* This_and_ArrowFunction */

//This keyword: this keyword refer the context.
const cource={
    name:"anupam",
    fees:999,

    delayFees: function(){
        console.log(`${this.name}, Sell JavaScript indepth cource at ${this.fees} rupee`);
        console.log(this);
    }
}
cource.delayFees()
cource.fees=599;
cource.delayFees() //here change the context
console.log(this); //return empty 

function codebase(){
    const name="Anupam ghosh";
    console.log(this.name); // in normal function this keyword not working
}
codebase() //return undefined 

/* Arrow Function */

//declare Arrow Function
const database=()=>{
    const dbname="Batman";
    console.log(this.dbname);
}
database()

const db=(num1,num2)=> num1+num2 //implicit return

/*Normal functions: Have their own this context. This value depends on how the function is called.
Arrow functions: Don't have their own this. They inherit the this value from the surrounding scope where they are created.*/

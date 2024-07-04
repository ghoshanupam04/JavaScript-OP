/* Array */

//Declare Array
const myScore=[0,1,2,3,4,5]
console.log(myScore);
console.log(typeof(myScore)); //Array is an Object.
console.log(myScore[2]); //Access the array element.

//Define a new type of Array:
const Superhero=new Array("BatMan","SuperMan","WodaWomen","Flash","Aqualat");
console.log(Superhero);

/* Array Methods */
console.log(Superhero.length); // print the length of the array.
console.log(myScore.length); 

Superhero.push("GREEN LANTERN"); //Add the element at the last in the Array.
console.log(Superhero); 

Superhero.pop(); //Remove the last element in the array
console.log(Superhero);

Superhero.unshift("BrussWeen"); // Insert in the element at the first Position.
console.log(Superhero);

Superhero.shift(); // Delete the First element in the Array.
console.log(Superhero);

console.log(myScore.includes(7)); // check the element is exist or not.
console.log(Superhero.indexOf("Spiderman"));  // check the element is exist or not.

const ConvartArray= Superhero.join(); //Array to String
console.log(ConvartArray);
console.log(typeof(ConvartArray)); //String

console.log("A: Slice",myScore); //In slice original array not changed
const mynm= myScore.slice(1,3)
console.log(mynm);
console.log(myScore);


console.log("B: Splice",myScore); //in splice original array was manupulate and changed.
const myNm=myScore.splice(1,3)
console.log(myNm);
console.log(myScore);

console.log(Superhero.join(" + ")); //join the + element each and every element.
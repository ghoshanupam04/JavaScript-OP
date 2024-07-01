/*String*/

//Basic concatenation in Sting
const name="Anupam";
const lastname="Ghosh";
console.log(name + lastname+ " is my name."); // this is a old process
console.log(`My name is ${name} ${lastname}`); //Modern Way concatenate.Here we use backtiks and here we use string interpolation.

//Declare new way of String:
const myName= new String("Anupam Ghosh");
console.log(myName);

//check the length
console.log(myName.length); //Display the lengths.

//Access Sentences:
console.log(myName[1]); //Access the sentence.

//Proto declare the empty object
console.log(myName.__proto__); //display all the proto and declare the empty object.

//String to Uppercase:
console.log(myName.toUpperCase());
 
////String to lowercase:
console.log(myName.toLowerCase());

//Check the Position wise character:
console.log(myName.charAt(4));

//Check the character wise Position
console.log(myName.indexOf("a"));

//Substring 
console.log(myName.slice(0,5)); 

//Slice
console.log(myName.slice(-2,1)); 

const sentence="   The BatMan   ";
console.log(sentence);
//trim 
console.log(sentence.trim()); //trim can reduce unusal spaces.
console.log(sentence.trimStart()); //trim can reduce unusal Start spaces.
console.log(sentence.trimEnd()); //trim can reduce unusal End spaces.

//Replae:
console.log(sentence.replace("BatMan"," BrusWeen")); //Replace the sentence

//Check the character is present or not.
console.log(sentence.includes("This")); //  if that is present then the o/p=> True otherwise False.

//String to Array:
console.log(sentence.split(" "));

//bold
console.log(sentence.bold()); // Tect is bold

//blink:
console.log(sentence.blink())

//Substr:
console.log(name.substr("1, 2"));
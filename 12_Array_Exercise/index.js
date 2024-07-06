/* Practice some Array Questions */

/* 1. Create an array containing your favorite colors and then:
      i) Access and print the second element.
      ii) Add a new color to the end of the array.
      iii) Find the length of the array (number of elements). */

//Code
const favColor=new Array("Red","Black","Pink","Yellow","Green");
console.log(favColor); //Print all the Array.
console.log(favColor[1]); //Access and print the second element.
favColor.push("Cyan"); //Add a new color at the end of the array.
console.log(favColor);
console.log(favColor.length); //


/* 2. Searching: Create an array of fruits and write code 
    to check if a specific fruit exists in the array. */

//Code

const myFruit=["Apple","Mango","Banana"];
console.log(myFruit.indexOf("Apple"));


/* 3. Combine (concatenate) two arrays into a single array */

//code:
const arratOne=["SpiderMan","Dr Strange","IronMan","Captain America"];
const arrayTwo=["SuperMan","BatMan","Wonda Women","Flash"];
const margeArr=arratOne.concat(arrayTwo);
console.log(margeArr);


/* 4.Insert an Element at the first position at the array and after 
    print delete the first element */

//Code
const elementArr=["Samsung","Apple","Motorola"];
const addElemntFirst=elementArr.unshift("Vivo"); //Add at the first 
console.log(elementArr);
const delElement=elementArr.shift();
console.log(delElement);


/* 5.Sort the Number */
const dataSort=[5,2,3,4,1];
console.log(dataSort.sort());

/* While and Do-While loop in js */

//Structure of While Loop:
let index=1;
while (index<=10) { //here we declare the condition
    console.log(`The Value of index is ${index}`);
    index++; //increase the value
}

//Print only even number:
let ind=0;
while(ind<=10){
    console.log(`The Even Number is: ${ind}`);
    ind=ind+2;
}

//Access Array using While Loop:
const arr=["Batman","Superman","Flash","WondaWoman"];
let count=0
while (count<=arr.length) {
    console.log(`The DC superhero is: ${arr[count]}`);
    count++;
}

//Declare Do_while Loop:
let score=1;
do{
    console.log(`The Score is ${score}`);
    score++
}while(score<=10) //in do-while loop we decare the task at the end.
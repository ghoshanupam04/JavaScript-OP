/* Descuss on the Loop Topics */

//for loop:
const no=10;
for(i=1;i<=no;i++){ //here we create a condition 
    console.log(i); // call the variable 
}

//Describe gor loops using some condition
for(let i=0;i<10;i++){
    let number=i;
    if(number==5){
        console.log("Print the number -5");
    }
    console.log(i);
}

//Nested for loops: / number table
for(let i=1; i<=10;i++){
    console.log(`The innerloop value is ${i}`);
    for(let j=1;j<=10;j++){
        console.log(i+" * "+j+" = "+ i*j);
    }
}

//Print Array element using loops:
const myArray=["Superman","Flash","Batman","Wondawoman","Aqualaman"];
for(let i=myArray;i<=myArray.length;i++){
    const arrel=myArray[i];
    console.log(arrel);
}
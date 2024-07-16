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

//Print Array Element using for loop:
const myArr=["Batman","Superman","Flash","Wondawoman","Aquaman"];
console.log(myArr);
for(let i=0;i<myArr.length;i++){ //Starting loop at 0-th element to array length
    console.log(myArr[i]); //after that print that
}

//Revarce Loop:
console.log("The Revarce Array:");
for(let i=myArr.length;i>=0;i--){
    console.log(myArr[i]);
}

//Continue and brake statement:
for(i=0;i<=10;i++){
    if(i==5){
        console.log("5 Was Detected.");
        break;
    }
    console.log(i);
}

//Using Array Elements:
for(let i=0;i<myArr.length;i++){
    const superhero=i;
    if(superhero=="Flash"){
        console.log("Flash Was Detected");
        break;
    }
    console.log(myArr[superhero]);
}

//continue:
for(i=0;i<=10;i++){
    if(i==5){
        console.log("5 Was Detected.");
        continue;
    }
    console.log(i);
}
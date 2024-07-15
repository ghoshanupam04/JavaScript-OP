/* Control Flow */

//Conditional statement: 
//if-else
const age=19;
if(age>=20){
    console.log("Youser are eligible for login"); //if the condition was true then print this.
}
else{
    console.log("Sorry!! Youser are not eligible for login"); // otherwise print this.
}


/* == vs === */
const no1=12;
let no2="12";
if(no1==no2){  // == normal check
    console.log("Equal");
}
else{
    console.log("not");
}
if(no1===no2){  // ===  Strict Check, here we see the type and aftertaht we can decide the o/p
    console.log("Equal");
}
else{
    console.log(`not `);
}

//Short hand notation / shorthand if-elses
/* ex: if(100<0) console.log("Kya hai be");*/

//nested if-else if-else
const number=19;
if(number>21) console.log("greater than 20");
else if(number>=20) console.log("greater than equal 20");
else console.log("not");

/* Switch - case */

const days=8;
switch(days){
    case 1: console.log('Monday');
    break;
    case 2: console.log('Tuesday');
    break;
    case 3: console.log('Wednesday');
    break;
    case 4: console.log('Thursday');
    break;
    case 5: console.log('Friday');
    break
    case 6: console.log('Saturday');
    break;
    case 7: console.log('Sunday');
    break;
    default: console.log("Not a day");
    break;
}

// (??)Nullish
const val=20?? null;
console.log(val);

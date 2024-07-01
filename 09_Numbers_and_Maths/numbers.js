/* Numbers */
const score=400;
console.log(score, typeof(score));

const balance= new Number(400);
console.log(balance);
console.log(balance.toString());

//Fixed the value
console.log(score.toFixed());

//Procision value:
const otherNumber=28.9699;
console.log((otherNumber.toPrecision(2)));

//Local String
const number=100000;
console.log(number.toLocaleString()); //bydefault US Standers
console.log(number.toLocaleString("en-in"));  //Indian standers

/****************** Done the Basics************************* */
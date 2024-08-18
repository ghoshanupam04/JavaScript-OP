/*Q: In JS Math.PI value is 3.14... , This value was changeable or no, we overwrite/create the
value 3 or 4? If Possible how we implement?
=> The answer is possible, but in Math.PI this is constante*/

// To know the object properties description we use = getOwnPropertyDescriptor

//Check Possible approach
const descripter=Object.getOwnPropertyDescriptor(Math,"PI"); //to know indepth of Object
console.log(descripter); 

const chai={
    name:"Masala Tea",
    price:120,
    isAvailable:true,

    orderchai(){
        console.log(`Chai bai nahi`);
        
    }
}
console.log(chai);

//Check the Descripter property is Available or not?
console.log(Object.getOwnPropertyDescriptor(chai)); //this return undefined
console.log(Object.getOwnPropertyDescriptor(chai,"name","price","isAvailable")); //yess Available

//Change the properties:
Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:true, //if enumerable false then looping not possible
})
console.log(Object.getOwnPropertyDescriptor(chai,"name")); //changed done

//Itrable :
for (const [key,value] of Object.entries(chai)) {

    if(typeof value !== "function"){
        console.log(`${key} : ${value}`);
    }
}

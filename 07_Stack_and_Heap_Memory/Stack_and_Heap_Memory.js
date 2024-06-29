//Stack_and_Heap_Memory:

// Two type of Memory are here- i>Stack ii>Heap

//In all primitive case there use 'Stack' memory.
//In all the Non-Primitive case there also use 'Heap'.

/*When The stack memory was use then a copy they provide, 
  but when Heap memory was use then that make references from original value.*/

//Primitive store in Stack
const name="Anupam Ghosh";
// const My_Office_Name=name; //Reference 
const My_Office_Name="Knight";
console.log(My_Office_Name);
console.log(name);  //That all are store in 'Stack' and when we change then original one is change and reseave the copy.

//Non-Primitive
const myInfo={
    myname:"Anupam",
    email:"ghoshanupam@gmail.com",
}
console.log(myInfo); //Here all the information was stored in 'Heap' nad we receive the reference from the original value.
myInfo.name="BatMan";
console.log(myInfo.name); 
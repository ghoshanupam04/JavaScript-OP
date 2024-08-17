//Discuss About Oops:
//class -

//Object Literals:
const menu={
    "firstname":"Anupam",
    "lastname":"Ghosh",
    "department":"Developement",
    "greed":function(){
        console.log("Hello Coders");
        console.log(`firstname is :${this.firstname}`); //using this keyword 
        console.log(this); //return current context     
        
    }
}
console.log(menu.firstname);
console.log(menu.greed());
console.log(this); //return an empty object bcz it declare globaly. 
 /*But in browser it returns window objects*/


//Constractor Function:
function user(name,pass,islogin){
    this.name=name
    this.pass=pass
    this.islogin=islogin
    return this
}
console.log(user);
const userone=user("Anupam",123,true); //overwrite the function
console.log(userone);
const usertwo=user('chai or code',234,false); //overwrite the function
console.log(usertwo);

/*use new keyword to have new instance, here we perform all things 
and the original one is not effected*/
const userThree=new user("Knight",904,true);   
console.log(userThree);







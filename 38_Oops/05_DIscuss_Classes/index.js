//Discuss Class Constractor:

//Create a Class:
class CreateUser {  //Define class keyword to create a class
    constructor(name, email, pass) {   //Define constractor to easily handle new keyword
        this.name = name;
        this.email = email;
        this.pass = pass;
    }
    encriptPass() {
        return `Anupam${this.pass}420`
    }
}
const userOne = new CreateUser('knight', 'ghoshanupam@google.com', 240) //create a new user
console.log("Your encrypted password is: " + userOne.encriptPass());

//Inheritance:
class CreateAnewUser{
    constructor(userName){
        this.userName=userName;    //this user name use in the teacher class  
    }

    Loguser(){
        console.log(`The Username is ${this.userName}`);
    }
}

class teacher extends CreateAnewUser{ //enxtend keyword inherite properties from the other class
    constructor(userName,email,pass){
        super(userName) //super refer the object where we define that /CreateAnewUser
        this.email=email;
        this.pass=pass
    }
    addCources(){
        console.log(`new cource was added by ${this.userName}`);
        
    }
}

const AnewUser=new CreateAnewUser("Anupam"); //Createe a new User
console.log(AnewUser.Loguser()); //Access the NewUsers Function

const AnewTeacher=new teacher("Anupam Ghosh","ghoshanupam@google.com","213"); //Createe a new User
console.log(AnewTeacher.addCources()); //Access the NewUsers Function

//Now to check the teacher can inherite properties from CreateAnewUser Class:
console.log(AnewTeacher.Loguser()); //Yess access perfectly.

//Now check that are equal or not:
console.log(AnewTeacher===AnewUser); //false

//Now check that are instance or not:
console.log(AnewTeacher instanceof CreateAnewUser); //true







//Getter and Setter:
//Getter: Its a function to get a Object, value.
//Setter: Its a function to set a object, value.

class User{
    constructor(email,password){
        this.password=password;
        this.email=email;
    }
    get password(){   //getter
        return this._password.toUpperCase()  //getter always return 
    }
    set password(value){ //setter 
        this._password=value.toUpperCase();  //setter was not return
    }
}
const User_Anupam=new User("ghoshanupam@google.com","abc");
console.log(User_Anupam.password);

//Old Syntax when using getter and setter:
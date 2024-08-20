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

//Old Syntax, using getter and setter when we not declare soort way:

//Function based:
function A_User(email,password){
    this._email=email;
    this._password=password;

    Object.defineProperty(this,"email",{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email=value;
        }
    })
}
const new_user=new A_User("ghoshanupam@google.com");
console.log(new_user.email);

//Object based:
const TheUser={
    "_email":"ghoshanupam@google.com",
    "_password":"12345098",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email=value;
    }
}
console.log(TheUser.email);

/*We use Underscore because without underscore they go to the race condition and make stack
CSSFontFeatureValuesRule, so we use underline.*/
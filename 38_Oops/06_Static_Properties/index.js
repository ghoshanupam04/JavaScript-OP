//Static properties:
class user{
    constructor(username){
        this.username=username;
    }

    loguser(){
        console.log(`The User Name is: ${this.username}`);    
    }

    static loginId(){ //static can stop the method to use
        return 123;
    }
}

const newuser=new user("Anupam");
console.log(newuser.loguser()); 
console.log(newuser.loginId());  //it can not run 

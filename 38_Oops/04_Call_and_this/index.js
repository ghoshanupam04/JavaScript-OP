// call Keyword:-
function SetUser(username) {
    this.username = username; //this can call in the next function.
}

function createUser(username, email, password) {
    SetUser.call(this, username) //Here the call function worked.
    // this.username=username;
    this.email = email;
    this.password = password;
}

const chai = new createUser("Chai", "chai@google.com", 123);
console.log(chai);

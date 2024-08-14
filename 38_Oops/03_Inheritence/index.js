//Describe Inheritence in JavaScript:

//Inheritance -- prototypal Inheritance:
const user={
    name:"Anupam Ghosh",
    email:"ghoshanupam@google.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false,
}
const TAsupport={
    makeassignment:"JS Assignment",
    fulltime:true,
    __proto__:TeachingSupport, //inherite TeachingSupport  properties
}

Teacher.__proto__=user; // Teacher inherite users propertiess.

//Modern syntax to inherite:
Object.setPrototypeOf(TeachingSupport, Teacher);
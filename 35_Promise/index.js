//Promise:

//Create a Promise:
const PromiseOne=new Promise((resolve,reject)=>{     //Promise is an object
    //Do an async tasks
    setTimeout(function(){
        console.log("Async Task Is Done"); //Atfirst print this 
        resolve() //then call that
    },1000)
}); 
//consume the promiseone
PromiseOne.then(function(){
    console.log("Promise Consumed"); //and then print this 
})


//Declare promise another way:
new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("AsyncTask two");
        resolve()
    },1000)
}).then(function(){
    console.log("Run tasks");
})


//Resolve tasks:
const ThirdPromise=new Promise((resolve,reject)=>{
    resolve({name:"Anupam Ghosh",
        Email:"anupam@gmail.com"
    })
})
ThirdPromise.then((data)=>{
    console.log(data);
    console.log("Declare Resolve Tasks");
})


//Explore Resolve and Reject Tasks:
new Promise((resolve,reject)=>{
    setTimeout(function(){
        const error=true;
        if(!error){
            resolve({name:"Anupam",pass:"123"});
        }
        else{
            reject("ERROR! A Error Occured.")
        }
    },1000)
})
.then((data)=>{
    console.log(data);
    return data.pass
})
.then((pass)=>{
    console.log(pass);
}).catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("done task");
})

//Async & Await Gressfull handle error
const FifthPromise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        const error=true;
        if(!error){
            resolve({language:"JavaScript",chapter:"Promise"});
        }
        else{
            reject(`ERROR! JS Gone Error state`)
        }
    }, 1000);
})
async function consumePromiseFive(){
    try{
        const result=await FifthPromise
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()

      
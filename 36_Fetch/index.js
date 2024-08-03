// fetch:
fetch("https://api.github.com/users/anupamghosh04")
.then((Response)=>{
    return Response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
})
const items=document.querySelector('#to-do');
        const add=document.querySelector("#add-items");
        const addArea=document.querySelector("#free-space");
        
        const storeTasks=[];

        add.addEventListener("click",(eve)=>{
            const tasks=items.value;
            storeTasks.push(tasks);
            console.log(tasks);
            addArea.innerHTML=`<u> Your tasks are </u> <br> ${tasks}`
            for(i=storeTasks.length-1;i>0;i--){
                addArea.innerHTML+=`<ul> <li> ${storeTasks[i-1]} </li> </ul>`
            }
        })
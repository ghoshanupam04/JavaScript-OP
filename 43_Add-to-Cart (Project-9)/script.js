const space = document.querySelector(".container");
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");

let spaceValue = 0;

    //Add to cart
add.addEventListener("click", (eve) => {
    spaceValue++
    space.textContent = spaceValue;
})

    //Remove to cart
remove.addEventListener("click", (eve) => {
    spaceValue--
    space.textContent = spaceValue
    
})
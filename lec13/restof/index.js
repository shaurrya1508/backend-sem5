const box = document.querySelector(".box");
const btn = document.querySelector("button");
const stop = document.querySelector(".stop");

const color=["red","blue","black","yellow"];
const len = color.length;
let id 
btn.addEventListener("click",()=>{

    id = setInterval(() => {
        const num = Math.floor(Math.random() * len);
        console.log(num)
        box.style.backgroundColor = color[num];
        
    }, 1000);
    console.log({id})
})
stop.addEventListener("click",()=>{
    if(id)clearInterval(id);
    id = undefined;
})

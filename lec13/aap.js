const addbtn = document.querySelector("#addbtn");
const todoList = document.querySelector(".todoList");
const inputForm = document.querySelector(".inputForm");
const inputField = document.querySelector("#Title");
console.log(todoList)
let todoArray = []

inputForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const title = inputField.value;
    console.log(title);
    todoArray.push({
        title,
        id:crypto.randomUUID(),
    })
    showtodo()
})

function showtodo(){
    todoList.innerHTML="";
    todoArray.forEach(element => {
        const newtodo = document.createElement("div");
        newtodo.innerHTML=`
            <span>${element.title}</span>
            <div class="btn" >
                <button id="editbtn">Edit</button>
                <button id="delbtn">Delete</button>
            </div>
        `
        newtodo.id= element.id;
        todoList.appendChild(newtodo);
        newtodo.addEventListener("click",(e)=>{
            if(e.target.innerText==="Delete"){
                todoList.removeChild(newtodo);
                const idx = todoArray.findIndex(ele=>ele.id===element.id)
                todoArray.splice(idx,1);
            }
            else if(e.target.innerText==="Edit"){

            }
            else{
                const target = newtodo.firstElementChild
                console.dir(newtodo)
            }
        })
        
    });


}
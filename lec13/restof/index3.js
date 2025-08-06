
const todo={id:"2314", title:"todo1"}
let li = (document.createElement("li"));
let ul = (document.querySelector("ul"));
let todoList = [];
function addTodo(){

    li.innerHTML=`<input type="checkbox" id="check1">
                <span>${todo.title}</span>
                <div>
                    <button class="edit">edit </button>
                    <button class="delete">delete </button>
                </div>`
    li.setAttribute("id",todo.id);
    ul.appendChild(li);


}

function showtodo(todoList){
    todoList.forEach((todo) => {
        addTodo(todo);
    });

}
showtodo(todoList);
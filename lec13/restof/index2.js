const editbtn = document.querySelector(".edit")
const delbtn = document.querySelector(".delete")

console.dir(delbtn)
delbtn.addEventListener("click",(e)=>{
    console.log(e.target.parentElement.parentElement.attributes["id"])
})
editbtn.apend

async function fetchData() {
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        console.log(response.data);
    }
    catch(err){
        console.log(err)
    }

}
function addUser() {
    const email="user@gmail.com"
    const password="123"
    const res = axios.post("/users", {
        email: email,
        password: password
    })
    .then(res => {
        console.log(res.data.message);
    })
}

addUser(); 
const ul = document.querySelector("#list");
console.log(ul)
function getusers(url) {
    fetch(url)
        .then(response => response.json())
        .then(users => {
            console.log(users)
            users.forEach(user => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h1>${user.name}</h1>
                    <p>${user.username}</p>
                `;
                ul.appendChild(li);
                
            });
        })
        .catch(err => console.error(err));
}

getusers("http://localhost:4444/users");


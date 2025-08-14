const loginform = document.getElementById("loginform");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");


loginform.addEventListener("submit", (e) => {
    // e.preventDefault();
    const email = emailField.value;
    const password = passwordField.value;
    addUser({ email, password });
});

async function addUser(userobj) {
    try {
        const res = await fetch("adduser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userobj)
        });
        const data = await res.json();
        if (data.success) {
            console.log(data.message);
        } else {
            console.log(data.message);
        }
    } catch (err) {
        console.log(err);
    }
}
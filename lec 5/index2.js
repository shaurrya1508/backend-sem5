let p = new Promise((resolve, reject,a) => {
    console.log(a);
    let age = 18;
    if(age>=18) return resolve("you are eligible to vote");
    else return reject("you are not eligible to vote");

})

p.then((data) => {
    console.log(data);
    console.log("promise resolved");
})
.catch((err) => {
    console.log(err);
    console.log("promise rejected");    
    
})


let users = [{
    id:1,
    name: "John",
    age: 20,
},
{
    id:2,
    name: "Jane",
    age: 17,
}];

function checkEligibility(id) {
    return new Promise((resolve, reject) => {
        let user = users.filter(user => user.id === id);
        if(user.age >= 18) {
            resolve(`${user.name} is eligible to vote`);
        } else {
            reject(`${user.name} is not eligible to vote`);
        }
    });
}   
checkEligibility(1)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
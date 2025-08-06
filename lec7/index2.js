// const fs = require("fs");
// fs.readFile("text.txt", "utf-8", (err, data) => {
    
//     fs.readFile("text2.txt", "utf-8", (err, data2) => {
//         const combined = JSON.parse(data).concat(JSON.parse(data2));
//         fs.writeFile("combined.txt", JSON.stringify(combined), (err) => {
//             if (err) {
//                 console.log("err", err);
//             }
//         });
// });});

const {read,write} = require("./io");   
 
read("text.txt")
    .then(data => {
        return read("text2.txt").then(data2 => {
            const combined = data.concat(data2);
            return write("combined.txt", combined);
        });
    })
    .then(() => {
        console.log("Files combined successfully");
    })
    .catch(err => {
        console.error("Error:", err);
    });

const fs = require("fs");
console.log("start of file");
setTimeout(()=>{
    console.log("settimeout ")
},0
)
setImmediate(()=>{
    console.log("setimmediate")
})
fs.readFile("./lec1/demo.txt", (err, data) => {
   console.log(data);
//    setTimeout(() => {
//     console.log("settimeout inside readfile")
//    }, 0);
//    setImmediate(() => {
//     console.log("setimmediate inside readfile")
//    });

});
console.log("end of file");

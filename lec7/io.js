const fs = require("fs");
function read(file){
    return new Promise((resolve, reject) => {  
        fs.readFile(file, "utf-8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}


function write(file,data){
    return new Promise((resolve, reject) => {  
        fs.writeFile(file, JSON.stringify(data), (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

module.exports = {
    read,
    write
};
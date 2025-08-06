const fs = require("fs");
function read(file){
    return new Promise((resolve, reject) => {  
        fs.readFile(file, "utf-8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                if(data)resolve(JSON.parse(data));
                else resolve();
            }
        });
    });
}


function write(file,data){
    return new Promise((resolve, reject) => {  
        fs.writeFile(file, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve("Done writing");
            }
        });
    });
}

module.exports = {
    read,
    write
};
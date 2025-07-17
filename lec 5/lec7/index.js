const fs = require("fs");
fs.readFile("text.txt", "utf-8", (err, data) => {
    
    fs.readFile("text2.txt", "utf-8", (err, data2) => {
        const combined = data+data2
        fs.writeFile("combined.txt", combined, (err) => {
            if (err) {
                console.log("err", err);
            }
        });
});});

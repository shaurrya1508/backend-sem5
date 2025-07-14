// function buyproduct(product,cb){
//     setTimeout(() => {
//         console.log(`buying ${product}`);
//         cb();
//     })
// }


products = [{    name: "shoes",
                price: 1000,
            quantity:10,},
            {    name: "shirt",
                price: 500,
            quantity:20,},
]


function buyproduct(product, cb) {

    return new Promise((resolve,reject) => { 
            let found = null;
            for (let i = 0; i < products.length; i++) {
                if (products[i].name === product) {
                    found = products[i];
                }
            } 
            if(!found) {
                reject("product not found");
            }
            else{
                resolve(found.price);
            }
        }, 1000);
    // setTimeout(() => {  
    //     let found = null;
    //     for (let i = 0; i < products.length; i++) {
    //         if (products[i].name === product) {
    //             found = products[i];
    //         }
    //     } 
    //     if(!found) {
    //         cb("product not found",null);
    //     }
    //     else{
    //         cb(null, found.price);
    //     }
    // }, 1000);
}


// buyproduct("shoes", (err,data) => {
//     if(err)console.log(err);
//     else 
//     {   
//         console.log(`product amount is ${data}`);
//         deductamount(data,(err,data)=>{
//         if(err)console.log(err);
//         else console.log(`  item purchased and new ba;ance is ${data} `)
//     });
// }
// });

buyproduct("shirt")
.then((data) => {
    console.log(`product amount is ${data}`);   
    deductamount(data)
    .then((data) => {
        console.log(`  item purchased and new balance is ${data} `);
    })
    .catch((err) => {
        console.log(err);
    });
})
.catch((err) => {
    console.log(err);
}   );

let accntBalance = 20000;
function deductamount(data,funct){

    return new Promise((resolve,reject) => {    
        if(accntBalance < data) {
            reject("low balance");
        }
        else {
            if(accntBalance >= data) {
                accntBalance -=data;
                resolve(accntBalance);
            }
        }
    });
    // if(accntBalance < data) {
    //     funct("low balance ", null);
    // }
    // else {
    //     if(accntBalance >= data) {
    //         accntBalance -=data;
    //         funct(null,accntBalance);
    //     }
    // }
}
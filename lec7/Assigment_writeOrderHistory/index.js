const fs = require('fs');
const {read,write} = require("../io.js")// we having parses result on readdd
// and data should be string on sending write
async function finalOrder(user,order){
    const users =await  read("./users.txt")
    const products = await  read("./products.txt")
    // console.log(users,products);

    const currentuser = users.filter(ele=>ele.name===user  )
    if(currentuser.length==0)console.log("user not avaliiable")
        
    const currproduct = products.filter(ele=> ele.name===order  )
    if(currproduct.length==0)console.log("product not avaliiable")
    

    let ordersHis = await  read("./orderHistory.txt");
    if(!ordersHis) ordersHis = []
    ordersHis.push({
        name:user,
        product:order,
    })

    console.log(await write("./orderHistory.txt",JSON.stringify(ordersHis)))
   
}

let user = process.argv[2];
let product = process.argv[3];
finalOrder(user,product)
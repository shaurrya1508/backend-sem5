function m1(req,res){
    console.log("running middleware 1");
    res.user = {
        id:1,
        username:"taranjot"
    }
}
function m2(req,res,next){
    console.log("running middleware 2");
    console.log(res.user);
    req.isAdmin = true;
    return next();
}
function checkAdmin(req, res, next) {
    console.log("running checkAdmin middleware");
    let{name}=req.query;
    if (name === "shaurya") {
        req.isAdmin=true;
        return next();
    };
}
res.json({
    success:false,
    message:"you are not an admin",
     })

module.exports.m1 = m1;
module.exports.m2 = m2;
module.exports.checkAdmin = checkAdmin
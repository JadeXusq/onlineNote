var express=require('express');
var app=express();
var router=express.Router();
router.get("/",function(req,res){
    res.send("234");
});
app.use("/",router);
app.listen(8888);
console.log("端口8888已启用！");
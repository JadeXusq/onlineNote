var express=require('express');
var app=express();
var router=express.Router();

//设置主页
router.get("/",function(req,res){
    res.sendFile(__dirname+"/views/index.html");
});

//设置站点图标
router.get("/favicon.ico",function(req,res){
    res.sendFile(__dirname+"/public/img/favicon.ico");
});

//设置栏目页
router.get('/:view',function(req,res){
    res.sendFile(__dirname+"/views/"+req.params.view+".html");
})

//设置静态路径
app.use(express.static("./public"));


//设置路由挂载路径
app.use("/",router);

//监听端口8888
app.listen(8888);
console.log("端口8888已启用！服务已开启！");
let express = require('express');
let router = express.Router(); // 创建一个路由池子
// router也是一个函数
let path = require('path');
router.get('/login',function (req,res) {
    res.send('登录')
});
router.get('/reg',function (req,res) {
    // path.resolve是根据运行的文件的位置来解析的，所以此时不能用resolve
    console.log(path.resolve('../views/reg.html'))
    res.sendFile(path.join(__dirname,'../views/reg.html'))
});
module.exports = router;

let express = require('express');
let app = express();
app.listen(3000);
//  /user/login
let user = require('./routes/user');
let bodyParser = require('body-parser');
// 解析表单格式 把表单内的数据 解析后放在req.body上
app.use(bodyParser.urlencoded({extended:false}));

// 解析json格式 把json字符串转化成对象 解析后放在req.body上
app.use(bodyParser.json());
app.use('/user',user);
// /article/post
let article = require('./routes/article');
app.use('/article',article);

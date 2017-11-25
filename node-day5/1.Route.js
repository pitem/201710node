let express = require('express');
let app = express();
app.listen(3000);
//  /user/login
let user = require('./routes/user');
app.use('/user',user);
// /article/post
let article = require('./routes/article');
app.use('/article',article);

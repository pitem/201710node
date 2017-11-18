/*
let sum = 0;
for(var i = 1;i<=8;i++){
    sum +=Math.pow(2,i-1)
}
console.log(sum)*/

// 1.通过长度创建
var buffer = Buffer.alloc(100); // 相对这种方法比较耗性能
console.log(buffer);
var buffer = Buffer.from([17,18,19,0x11]);// 会自动把10进制转化成16进制
console.log(buffer);
var buffer = Buffer.from('珠峰培训');
console.log(buffer.length); // 转化成buffer后长度为buffer的长度
console.log(buffer.toString());

//1)fill方法
var buffer = Buffer.allocUnsafe(100);
buffer.fill(0);
console.log(buffer);
//2)slice方法 （截取，克隆：深(递归循环,parse(stringify)),浅(slice assign,{...{}})）
// 深拷贝 就是两个人长的一样但是毫无关系，浅拷贝就是两个对象中存放的空间是一样的
var obj = {name:{name:'zfpx'}};
var newObj = JSON.parse(JSON.stringify(obj));
/*var obj = {name:'zfpx'};
var arr = [obj,2,3];
var newArr = arr.slice(0);
arr[0].name = 'hello';
console.log(newArr);

var obj = {name:{name:'zfpx'}};
var newObj = Object.assign({},obj);
obj.name.name = 'hello';
console.log(newObj);*/




const vm = new Vue({
    el:'#app',
    data:{
        todos:[
            {isSelected:false,title:'睡觉'},
            {isSelected:false,title:'吃饭'},
        ]
    }
});
// 1.将数据循环到页面上
// 2.敲回车时添加新数据(需要加入isSelected属性)
// 3.删除功能
// 4.计算一下当前没有被选中的个数




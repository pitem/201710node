const vm = new Vue({
    el:'#app',
    data:{
        todos:[
            {isSelected:false,title:'睡觉'},
            {isSelected:false,title:'吃饭'},
        ],
        title:''
    },
    methods:{
        add(){ // keydown/keyup差一个单词，keydown的时候内容没有进入到输入框内
            this.todos.push({
                isSelected:false,
                title:this.title
            });
            this.title = '';
        },
        remove(todo){ //拿到当前点击的和数组里的比对相等则返回false即可
            this.todos = this.todos.filter(item=>item!==todo);
        }
    },
    computed:{
        count(){
            return this.todos.filter(item=>!item.isSelected).length
        }
    }
});
// 1.将数据循环到页面上
// 2.敲回车时添加新数据(需要加入isSelected属性)
// 3.删除功能
// 4.计算一下当前没有被选中的个数




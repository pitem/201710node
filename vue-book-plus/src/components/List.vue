<template>
  <div>
    <MHeader>列表页</MHeader>
    <div class="content" ref="scroll" @scroll="loadMore">
      <ul>
        <router-link
          v-for="(book,index) in books"
          :to="{name:'detail',params:{bid:book.bookId}}"
          :key="index"
          tag="li"
        >
          <img :src="book.bookCover">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>{{book.bookPrice}}</b>
            <button @click.stop="remove(book.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
      <div @click="more" class="more">加载更多</div>
    </div>
  </div>
</template>
<script>
import {pagination,removeBook} from '../api';
import MHeader from '../base/MHeader.vue'
export default {
    data(){
        // offset代表的是偏移量 hasMore 是否有更多  默认不是正在加载
        return {msg: 'hello',books:[],offset:0,hasMore:true,isLoading:false}
    },
    created(){
      this.getData();
    },
    methods: {
        loadMore(){
            // 卷去的高度   当前可见区域  总高
          // 触发scroll事件 可能触发n次  先进来开一个定时器，下次触发时将上一次定时器清除掉
          clearTimeout(this.timer); // 节流
          this.timer = setTimeout(()=>{
            let {scrollTop,clientHeight,scrollHeight} = this.$refs.scroll;
            if(scrollTop+clientHeight+20>scrollHeight){
                this.getData(); // 获取更多
            }
          },13);
        },
        more(){
            this.getData();
        },
        async remove(id){
          await removeBook(id); // 删除某一项
          // 要删除前台数据
          this.books = this.books.filter(item=>item.bookId!==id);
        },
        async getData(){
            if(this.hasMore&&!this.isLoading){ // 有更多的时候获取数据
              this.isLoading = true;
              let {hasMore,books} = await pagination(this.offset);
              this.books = [...this.books,...books]; // 获取的书放到books属性上
              this.hasMore = hasMore;
              this.isLoading = false; // 加载完毕
              this.offset = this.books.length; //维护偏移量 就是总书的长度
            }

        }
    },
    computed: {},
    components: {MHeader}
}
</script>
<style scoped>
  .content ul{
    padding: 10px;
  }
  .content ul li{
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
  }
  .content ul li img{
    width:130px;
    height: 150px;
  }
  .content h4{
    font-size: 20px;
    line-height: 35px;
  }
  .content p{
    color: #2a2a2a;
    line-height: 25px;
  }
  .content b {
    color: red;
  }
  .content button{
    display: block;width: 60px;height: 25px; background: orangered; color: #fff;border: none; border-radius: 15px; outline: none;
  }
  .more{
    margin: 10px;
    background: #2afedd;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 20px;
  }
</style>

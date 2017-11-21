<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
    </div>
  </div>
</template>
<script>
   //1.引入组件 2.注册组件 3.使用组件
    import MHeader from '../base/MHeader.vue';
    import Swiper from '../base/Swiper.vue';
    import {getSliders} from '../api';
    export default {
        async created(){
          // 给data起别名 对象中的属性名字必须和 得到的结果名字一致
          let {data} = await getSliders();
          // 将获取的数据放到sliders中
          this.sliders = data;
        },
        data(){
            return {sliders: []}
        },
        methods: {},
        computed: {},
        components: {
          MHeader,Swiper
        }
    }
</script>
<style scoped>

</style>

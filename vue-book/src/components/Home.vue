<template>
  <div>
    <MHeader>首页</MHeader>
  </div>
</template>
<script>
   //1.引入组件 2.注册组件 3.使用组件
    import MHeader from '../base/MHeader.vue';
    export default {
        data(){
            return {msg: 'hello'}
        },
        created(){
        },
        methods: {},
        computed: {},
        components: {
          MHeader
        }
    }
</script>
<style scoped>

</style>

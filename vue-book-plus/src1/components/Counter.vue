<template>
  <div>
    计数器: <button @click="minus">-</button>
    <br>
    当前：{{$store.state.count}} <br>
    计数器: <button @click="add">+</button>
  </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        created(){
        },
        methods: {
            add(){
                // 提交add的mutation
              // 载荷payload
               this.$store.commit('add',2)
            },
            minus(){
                this.$store.commit('minus')
            }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped>

</style>

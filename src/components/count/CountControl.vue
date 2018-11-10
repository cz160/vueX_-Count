<template>
    <div class="counter-control">
        <el-button @click="increment" type="primary">increment</el-button>
        <el-button @click = "randomChange" type="danger">random-change</el-button>
    </div>
</template>
<script>
import { Button } from "element-ui";
export default {
  components: {
    [Button.name]: Button
  },
  methods: {
        increment () {
            //type和payload
            this.$store.commit('increment',{
                num:3
            })
            // 对象方式提交mutations
            // this.$store.commit({
            //     type:'increment',
            //     num:10
            // })
            //使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用

        },
        randomChange(){
           // 直接调用action
           this.$store.dispatch('randomChange') 
        }   
  }
};
</script>
<style lang="scss">
</style>


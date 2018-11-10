<template>
    <div class="counter-view">
        <h3>Count: {{count}}</h3>
    </div>    
</template>
<script>
import { mapState } from 'vuex'
export default {
    //    computed:{
    //        count(){
    //            return this.$store.state.count
    //        }
    //    }
    // computed: mapState([
    //     // 映射 this.count 为 store.state.count
    //     'count'
    // ])
    computed:mapState({
        count:state=>state.count
    })
}
</script>
<style lang="scss">

</style>



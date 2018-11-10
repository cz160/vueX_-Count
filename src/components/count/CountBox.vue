<template>
    <div>
        <h1>计算器</h1>
        <count-view></count-view>
        <count-control></count-control>
    </div>
</template>
<script>
import CountView from '@/components/count/CountView'
import CountControl from '@/components/count/CountControl'
export default {
    components:{
        CountView,
        CountControl
    }
}
</script>
<style lang="scss">

</style>



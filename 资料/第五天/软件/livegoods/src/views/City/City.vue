<template>
    <div>
        <CityHeader title='城市选择' />

        <div class="current-city">
            <h2>当前城市：{{curcity}}</h2>
        </div>
        <CityHot />
    </div>
</template>
<script>
import CityHeader from '../../components/Header/Header'
import CityHot from './CityHot/CityHot'
import { mapState } from 'vuex'
export default {
    name:'City',
    data(){
        return{}
    },
    components:{
        CityHeader,
        CityHot
    },
    computed: {
        ...mapState(['curcity'])
    },
}
</script>
<style lang="less" scoped>
.current-city {
    width: 100%;
    background-color: #fff;
    text-align: center;
    padding: 30px 0;
    border-bottom: 1px solid #f1f1f1;
    h2{
      font-size: 20px;
    }
}    
</style>
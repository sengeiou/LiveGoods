<template>
    <div>
        <div id="search-header" class="clear-fix">
            <span class="back-icon float-left" @click="back">
                <i class="icon-chevron-left"></i>
            </span>
            <div class="input-container">
                <i class="icon-search"></i>
                <SearchInput :pk='$route.params.content' @setSearchMsgAciton='setSearchMsgAciton' />
            </div>
        </div>
        <!-- 列表部分 -->
        <SearchList :kw='searchMsg' :curcity='curcity'/>
    </div>
</template>
<script>
import SearchInput from '../../components/SearchInput/SearchInput'
import SearchList from './SearchList/SearchList'
import {mapState,mapActions} from 'vuex'
export default {
    name:'Search',
    data(){
        return{}
    },
    components:{
        SearchInput,
        SearchList
    },
    computed: {
        ...mapState(['searchMsg','curcity','page'])
    },
    methods: {
        ...mapActions(['setSearchMsgAciton']),
        back(){
            window.history.back();
        }
    }
}
</script>
<style lang="less" scoped>
#search-header {
    background-color: #ff5555;
    color: #fff;
    padding: 10px;
    text-align: center;
    position: relative;

    .input-container {
        background-color: #fff;
        border-radius: 15px;
        overflow: hidden;
        padding: 5px;
        text-align: left;
        margin-left: 30px;
        margin-right: 10px;

        i {
            color: #ccc;
        }
    }

    .back-icon {
        width: 16px;
        height: 16px;
        margin-top: 6px;
    }
}
    
</style>
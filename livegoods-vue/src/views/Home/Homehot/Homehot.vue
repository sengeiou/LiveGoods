<template>
  <div>
    <HomeHotView v-if="recommendation.length>0" :hotData="recommendation" title="热门推荐" />
    <div v-else>数据正在加载中...</div>
    <HomeHotView v-if="hotProduct.length>0" :hotData="hotProduct" title="热销产品" />
    <div v-else>数据正在加载中...</div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import HomeHotView from "../HomeHotView/HomeHotView";
export default {
  name: "Homehot",
  data() {
    return {
      hotProduct: [],
      recommendation: []
    };
  },
  computed: {
    ...mapState(['curcity'])
  },
  components: {
    HomeHotView
  },
  mounted() {
    // 热销产品
    this.$api.hotProduct({
      city:this.curcity
    })
    .then(data=>{
      if(data.data.status){
        this.hotProduct=data.data.data
      }
    })
    // 热门推荐
    this.$api.recommendation({
      city:this.curcity
    })
    .then(data=>{
      if(data.data.status){
        this.recommendation=data.data.data
      }
    })
  }
};
</script>
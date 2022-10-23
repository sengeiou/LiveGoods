<template>
  <div>
    <Header title="详情页" />
    <!-- 轮播图 -->
    <div v-if="swiperSlides.length>0">
      <MySwiper :swiperSlides="swiperSlides" />
    </div>
    <div v-else>数据正在加载中...</div>
    <!-- tabs -->

    <tabs :currentIndex="currentIndex" @changeCurrentIndex="changeCurrentIndexHandler">
      <tab label="房屋信息" index="0">
          <div v-if='detailsInfo.title'>
                <DetailsInfo :detailsInfo='detailsInfo' :id='$route.params.id' />
          </div>
          <div v-else>数据正在加载中...</div>
      </tab>
      <tab label="房屋评价" index="1">
          <DetailsComment :id='$route.params.id' />
      </tab>
    </tabs>
  </div>
</template>
<script>
import Header from "../../components/Header/Header";
import MySwiper from "../../components/MySwiper/MySwiper";
import DetailsComment from './DetailsComment/DetailsComment'
import DetailsInfo from './DetailsInfo/DetailsInfo'
// 引入tabs
import Tabs from "../../components/tabs/index.js";
import Vue from "vue";
Vue.use(Tabs);
export default {
  name: "Details",
  data() {
    return {
      swiperSlides: [],
      currentIndex: 1,
      detailsInfo: {}
    };
  },
  components: {
    MySwiper,
    Header,
    DetailsComment,
    DetailsInfo
  },
  mounted() {
    this.$api.getDetails({id:this.$route.params.id}).then(data => {
      this.swiperSlides = data.data.imgs;
      this.detailsInfo = data.data;
    });
  },
  methods: {
    changeCurrentIndexHandler(index) {
      this.currentIndex = index;
    }
  }
};
</script>

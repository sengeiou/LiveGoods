<template>
<div>
  <div id="home-header" class="clear-fix">
    <div class="home-header-left">
      <router-link to="/city">
        <span>{{ curcity ? curcity :'北京' }}</span>
        <i class="icon-angle-down"></i>
      </router-link>
    </div>
    <div class="home-header-right">
      <router-link to="/shopcar">
        <i class="iconfont icon-car"></i>
      </router-link>
    </div>
    <div class="home-header-middle">
      <div class="search-container">
        <i class="icon-search"></i>
        <SearchInput  />
      </div>
    </div>
  </div>
  <!-- 轮播图 swiper -->
  <MySwiper :swiperSlides='swiperSlides' />
  <!-- 热门部分 -->
  <Homehot />

  <!-- 底部导航 -->
  <FootNav />
  </div>
</template>

<script>
import Homehot from './Homehot/Homehot'
import SearchInput from '../../components/SearchInput/SearchInput'
import MySwiper from '../../components/MySwiper/MySwiper'
import FootNav from '../../components/FootNav/FootNav'
import { mapState } from 'vuex'
export default {
  name: "Home",
  data() {
    return {
      msg:'默认值',
      
      swiperSlides: []
    }
  },
  mounted() {
    this.$api.getBanner()
    .then(data=>{
      // console.log(data)
      if(data.data.status == 200){
        this.swiperSlides = data.data.results;
      }else{
        alert('轮播图图片获取失败')
      }
    })
  },
  components:{
    Homehot,
    SearchInput,
    MySwiper,
    FootNav
  },
  computed: {
    ...mapState(['curcity'])
  },
};
</script>
<style scoped lang='less'>
#home-header {
  background-color: #ff5555;
  padding: 10px;
  * {
    color: #fff;
    font-size: 16px;
    line-height: 1;
    text-decoration: none;
  }
}
.home-header-left {
  width: 3rem;
  text-align: left;
  margin: 5px 0;
  float: left;
}
.home-header-middle {
  width: auto;
  margin: 0 1.5rem 0 3rem;

  .search-container {
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    padding: 5px;

    i {
      color: #ccc !important;
    }
    input {
      width: 90%;
      color:#000000 !important;
      font-size: 14px !important;
      font-weight: normal;
      border: none;
      overflow: hidden;
    }
  }
}
.home-header-right {
  width: 2rem;
  margin: 5px 0;
  text-align: right;
  float: right;
  i {
    font-size: 18px !important;
  }
}

</style>

<template>
  <swiper :options="swiperOption" class="mySwiper">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" >
      <img :src="slide" alt  style="height:265px;"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: "MySwiper",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay:true
      }
    };
  },
  props:['swiperSlides']
};
</script>
<style lang="less" scoped>
.mySwiper img{
  width:100%;
}    
</style>
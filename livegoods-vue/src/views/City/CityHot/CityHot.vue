<template>
  <div class="city-list-container">
    <h3>热门城市</h3>
    <ul class="clear-fix" @click="getClickCity($event)">
      <li>
        <span>北京</span>
      </li>
      <li>
        <span>上海</span>
      </li>
      <li>
        <span>天津</span>
      </li>
      <li>
        <span>杭州</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: "CityHot",
  data() {
    return {};
  },
  methods: {
      getClickCity(e){
          // console.log(e.target.innerHTML)
          this.setCityAciton({
              data:e.target.innerHTML
          })
          window.history.back()
      },
      ...mapActions(['setCityAciton'])
  },
};
</script>
<style lang="less" scoped>
.city-list-container {
  background-color: #fff;
  padding: 10px 15px 20px 15px;

  h3 {
    font-size: 16px;
  }

  ul {
    display: block;
    width: 100%;
  }

  li {
    list-style: none;
    display: block;
    float: left;
    width: 33.3%;
    text-align: center;

    span {
      display: inline-block;
      border: 1px solid #ccc;
      font-size: 16px;
      line-height: 2;
      margin-top: 15px;
      width: 90%;
    }
  }
}
</style>
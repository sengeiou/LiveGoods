<template>
  <div class="list-item">
    <router-link :to="`/details/${ curdata.id }`">
      <img :src="curdata.img" alt />
      <div class="mask">
        <div class="left">
          <p><span v-html="curdata.title"></span></p>
          <p>{{curdata.houseType}}</p>
        </div>
        <div class="right">
          <div class="btn">{{curdata.rentType}}</div>
          <p>
            <span v-html="curdata.price"></span> 月
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Item",
  data() {
    return {};
  },
  props: ["curdata"]
};
</script>
<style lang="less" scoped>
.list-item {
  position: relative;
  margin: 5px 0;
  img {
    width: 100%;
  }
  .mask {
    position: absolute;
    width: 100%;
    height: 80px;
    background: rgba(255, 255, 255, 0.8);
    left: 0;
    right: 0;
    bottom: 0px;
    display: flex;
    .left {
      text-align: center;
      padding: 10px 10px;
      flex: 1;
      p {
        padding: 5px 10px;
        font-size: 12px;
      }
    }
    .right {
      text-align: center;
      padding: 10px 10px;
      flex: 1;
      p,
      div {
        padding: 5px 10px;
        font-size: 12px;
      }
      .btn {
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.8);
        color: #84a0ae;
      }
    }
  }
}
</style>
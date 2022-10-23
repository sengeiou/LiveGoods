<template>
  <div>
    <Header title="购物车" />

    <div class="userinfo-container">
      <p>
        <i class="icon-user"></i>&nbsp;
        <span>{{user}}</span>
      </p>
      <p>
        <i class="icon-map-marker"></i>&nbsp;
        <span>{{curcity}}</span>
      </p>
    </div>

    <!-- 订单 -->
    <ShopCarOrder />
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Header from "../../components/Header/Header";
import ShopCarOrder from './ShopCarOrder/ShopCarOrder'
export default {
  name: "Shopcar",
  data() {
    return {};
  },
  components: {
    Header,
    ShopCarOrder
  },
  computed: {
    ...mapState(["user", "curcity"])
  },
  mounted() {
    if (!this.user) {
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="less" scoped>
.userinfo-container {
    background-color: #fff;
    padding: 10px;

    p {
        line-height: 1.5;
        color: #666;
    }
}

</style>
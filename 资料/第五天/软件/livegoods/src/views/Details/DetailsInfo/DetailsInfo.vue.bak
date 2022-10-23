<template>
  <div>
    <div class="detail-info">
      <h3>{{detailsInfo.title}}</h3>
      <div class="box">
        <ul>
          <li>
            <span>{{detailsInfo.price}}/月</span>
            <p>租金</p>
          </li>
          <li>
            <span>{{detailsInfo.info.type}}/月</span>
            <p>房型</p>
          </li>
          <li>
            <span>{{detailsInfo.houseType}}</span>
            <p>面积</p>
          </li>
        </ul>
      </div>
      <div class="info">
        <div class="info-list">
          <p>楼层：{{detailsInfo.info.level}}</p>
          <p>装修：{{detailsInfo.info.style}}</p>
        </div>
        <div class="info-list">
          <p>类型：{{detailsInfo.info.type}}</p>
          <p>朝向：{{detailsInfo.info.orientation}}</p>
        </div>
        <div class="info-list">
          <p>年代：{{detailsInfo.info.years}}</p>
        </div>
      </div>
    </div>
    <DetailsStore :id="id" />
  </div>
</template>
<script>
import DetailsStore from "../DetailsStore/DetailsStore";
export default {
  name: "DetailsInfo",
  data() {
    return {};
  },
  components: {
    DetailsStore
  },
  props: ["detailsInfo", "id"]
};
</script>
<style lang="less" scoped>
.detail-info {
  h3 {
    font-size: 17px;
    color: #000;
    opacity: 0.8;
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
  }
  .box {
    width: 335px;
    // height: 50px;
    border-radius: 8px;
    margin-left: 20px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    ul {
      clear: both;
      overflow: hidden;
      padding: 10px 0px;
      li {
        float: left;
        margin-left: 30px;
        span {
          text-align: center;
          font-size: 17px;
          color: #ff5555;
        }
        p {
          text-align: center;
          font-size: 17px;
          color: #585858;
        }
      }
    }
  }
  .info {
    margin: 20px;
    .info-list {
      display: flex;
      p {
        flex: 1;
        font-size: 15px;
        margin: 5px;
      }
    }
  }
}
</style>
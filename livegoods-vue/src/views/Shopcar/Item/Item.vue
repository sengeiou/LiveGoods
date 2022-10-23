<template>
  <div class="clear-fix order-item-container">
    <div class="order-item-img float-left">
      <img :src="idata.img" />
    </div>
    <div class="order-item-comment float-right">
      <button class="btn" v-if="idata.commentState===0" @click="pingjia">评价</button>

      <button v-else-if="idata.commentState === 2" class="btn unseleted-btn">已评价</button>
      <span v-else></span>
    </div>
    <div class="order-item-content">
      <span>商户：{{idata.title}}</span>
      <span>类型：{{idata.houseType}}</span>
      <span>价格：￥{{idata.price}}</span>
    </div>
    <!-- 评价视图部分-->
    <div class="comment-text-container" v-if="idata.commentState === 1">
	
      <textarea :style="{ width: '100%', height: '80px' }" class="comment-text" v-model="msg"></textarea>
      <el-rate v-model="value"></el-rate>
      <button class="btn" @click="tijiao">提交</button>
      <button class="btn unseleted-btn" @click="quxiao">取消</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Item",
  data() {
    return {
        msg:'',
	value: null
    };
  },
  props:['idata'],
  methods: {
      pingjia(){
          this.idata.commentState = 1
      },
      tijiao(){
          if(this.msg==""||this.value==null||this.value==0){
	    this.$notify({
               title: '警告',
               message: '评价消息必须填写，评级必须选择',
               type: 'warning'
            });
	  }else{
          this.$api.getFeelback({
	      rate:this.value,
              feelback:this.msg,
              orderId:this.idata.id
          })
          .then(data=>{
            // console.log(data)
              this.idata.commentState = 2;
          })
	  }
          // this.$api.getFeelback({
          //   feelback:this.msg
          // })
          // .then(data=>{
          //   this.idata.commentState = 2;
          // })
      },
      quxiao(){
          this.idata.commentState = 0;
      }
  },
};
</script>
<style lang="less" scoped>
.order-item-container {
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f1;

  .btn {
    width: 80px;
    text-align: center;
    background-color: #ff5555;
    color: #fff;
    padding: 5px 0;
    border: 0;
    font-size: 16px;
  }
  .unseleted-btn {
    background-color: #999;
  }

  .order-item-img {
    width: 120px;
    height: 90px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .order-item-comment {
    width: 100px;
    text-align: right;

    button {
      margin-top: 25px;
    }
  }

  .order-item-content {
    margin: 0 130px;

    span {
      color: #666;
      display: block;
      text-align: left;
      line-height: 1.5;
    }
  }

  .comment-text-container {
    margin-top: 10px;

    .comment-text {
      border: 1px solid #f1f1f1;
    }
  }
}
</style>
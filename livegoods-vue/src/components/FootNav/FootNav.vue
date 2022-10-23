<template>
  <div class="nav-footer">
    <ul class="clear-fix">
      <li>
        <router-Link exact to="/">
          <i class="iconfont icon-home"></i>
          首页
        </router-Link>
      </li>
      <li>
        <router-Link to="/shop">
          <i class="iconfont icon-shop"></i>
          商城
        </router-Link>
      </li>
      <li>
        <router-Link to="/life">
          <i class="iconfont icon-trophy"></i>
          生活服务
        </router-Link>
      </li>
      <li>
        <router-Link to="/mine">
          <i class="iconfont icon-team"></i>
          我的
        </router-Link>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.active{
    color:red;
}
.nav-footer {
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px 0px 0px 1px #e1e1e1;
  ul {
    height: 50px;
    padding-top: 6.5px;
    li {
      float: left;
      text-align: center;
      width: 25%;
      i {
        display: block;
        font-size: 20px;
      }
      span {
        font-size: 12px;
      }
    }
  }
}
</style>
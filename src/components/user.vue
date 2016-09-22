<template>
<div>
 <page-header title="个人中心"></page-header>
 <div class="user-info">
   <div class="user-avater"><img src="../images/user-avater.png"></div>
   <p>{{user_info.name}}</p>
   <p>已绑定{{user_info.mobile}}</p>
 </div>
 <div class="user-op-list">
   <div class="user-op-cell"><a v-link="{ path: '/address' }">收货地址</a></div>
   <div class="user-op-cell"><a v-link="{ path: '/orders' }">订单管理</a></div>
   <div class="user-op-cell"><a v-link="{ path: '/service' }">售后服务</a></div>
 </div>
</div>
</template>

<script>
var Vue=require('vue');
var PageHeader=Vue.component('PageHeader', require("./Header.vue"));
export default{
  data(){
    return {
      user_info:{
        name:"狂奔的蜗牛",
        mobile:"15611111111"
      }
    }
  },
  components: {PageHeader:PageHeader}
}
</script>
<style lang="less">
  .user-info{
    background-color: #fff;
    padding: 30px;

    .user-avater{
      margin: 0px auto 10px;
      width: 60px;
      height:60px;

      img{
        width: 100%;
        border-radius: 5px;
      }
    }

    p{
      text-align: center;
      padding: 5px;
    }
  }

  .user-op-list{
        margin-top: 10px;
  }
  .user-op-cell{
    padding: 15px 15px;
    background-color: #ffffff;
    border-bottom: 1px solid #ededed;
    position: relative;

    a:link,a:visited{
      color: #333;
      display: block;
    }

    &:after{
      content: '>';
      position: absolute;
      right: 15px;
      top: 10px;
      color: #ccc;
    }
  }
</style>

<template>
<div class="page no-nav" transition="outLeftInRight">
 <page-header title="新增地址" :left="left" :right="right"></page-header>
 <div class="address-add">
   <form>
     <p><input type="text" placeholder="收货人" /></p>
     <p><input type="text" placeholder="手机号" /></p>
     <p><input type="text" placeholder="详细地址" /></p>
     <p><input type="text" placeholder="邮编" /></p>
   </form>
 </div>
</div>
</template>

<script>
var Vue=require('vue');
var PageHeader=Vue.component('PageHeader', require("./Header.vue"));
export default{
  data(){
    return {
      left:{
        text:"<返回",url:'/address'
      },
      right:{
        text:"保存",url:'/address'
      }
    }
  },
  components: {PageHeader:PageHeader}
}
</script>

<style lang="less">
  .address-add{
    margin-top: 10px;
    background-color: #ffffff;

    form{

      p{
        padding: 10px 15px;
        border-bottom: 1px solid #ededed;
      }
      input{
        border:1px solid #ffffff;
        font-family: '微软雅黑';
        font-size: 16px;

        &:focus{
          outline:none;
        }
      }
    }


  }
</style>

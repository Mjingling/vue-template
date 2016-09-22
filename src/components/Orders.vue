<template>
<div class="page no-nav" transition="outLeftInRight">
 <page-header title="订单列表" :left="left" :right="right"></page-header>
 <div class="orders-list">
   <div class="orders-item" v-for="item in address_list">
      <div class="item-op">
        <span>订单状态</span>
        <span>未发货</span>
      </div>
      <a class="home" v-link="{ path: '/index/home' }">
      <div class="item-con">
        <div class="img-placeholder"></div>
        <p>{{item.name}}</p>
        <p>共{{item.count}}件商品  共￥{{item.total}}</p>
      </div>
      </a>
   </div>
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
        text:"<返回",url:'/index/user'
      },
      right:{
        text:"",url:''
      },
      address_list:[
        {isDefault:true,id:0,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:1,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:2,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:3,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:4,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:5,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'}
      ]
    }
  },
  components: {PageHeader:PageHeader}
  ,methods:{
    setDefault:function(index){
      this.address_list.map((item)=>{
        item.isDefault=false;
      })
      this.address_list[index].isDefault=true;
    }
  }
}
</script>

<style  lang="less">
  .orders-list{
    .orders-item{
      background-color: #ffffff;
      margin-top:10px;
    }

    .item-op{
      color: #333333;
      padding: 10px 15px;
      border-bottom: 1px solid #ededed;

    }
    a:link,a:visited{
      color: #333333;
    }
    .item-con{
      padding: 10px 15px 10px 80px;
      position: relative;

      p{
        padding-top: 5px;
      }
      .img-placeholder{
        position: absolute;
        left: 15px;
        top:10px;
        width: 50px;
        height: 50px;
        background-color: #ccc;
        border-radius: 5px;
      }
    }

    .c_333{
      color: #333;
    }

    .f-r{
      float: right;
    }

    .item-btn{
      display: inline-block;
      padding: 0px 10px;
      margin-left: 10px;
    }
  }
</style>

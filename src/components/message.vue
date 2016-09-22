<template>
<div>
 <page-header title="购物车"></page-header>
 <div class="shop-car-list">
   <div class="shop-car-item" v-for="item in address_list">
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
      address_list:[
        {isDefault:true,id:0,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:1,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:1,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:1,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:1,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:1,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:1,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:1,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:1,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:1,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:1,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:1,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:2,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:3,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:4,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'},
        {isDefault:false,id:5,name:"秋装中长款毛呢外套 7796#姜黄色 S ",total:'500',count:'10'}
      ]
    }
  },
  components: {PageHeader:PageHeader}
}
</script>

<style lang='less'>
  .shop-car-list{
      margin-top:10px;
    .shop-car-item{
      background-color: #ffffff;
      border-bottom: 1px solid #ededed;
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
</style>>

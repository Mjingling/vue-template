<template>
<div class="page no-nav" transition="outLeftInRight">
 <page-header title="地址列表" :left="left" :right="right"></page-header>
 <div class="address-list">
   <div class="address-item" v-for="item in address_list">
      <div class="item-op">
        <span v-if="item.isDefault">默认地址</span>
        <span v-if="!item.isDefault" class="c_333" v-on:click="setDefault(item.id)">设为默认</span>
        <span class="item-btn f-r">删除</span>
        <span class="item-btn f-r"><a v-link="{ path: '/address/update' }">编辑</a></span>
      </div>
      <div class="item-con">
        <p>{{item.name}}  {{item.mobile}}</p>
        <p>{{item.address}}</p>
      </div>
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
        text:"新增",url:'/address/add'
      },
      address_list:[
        {isDefault:true,id:0,name:"唐三藏",mobile:'15625555555',address:'东土大唐'},
        {isDefault:false,id:1,name:"唐三藏",mobile:'15625555555',address:'花果山水帘洞'},
        {isDefault:false,id:2,name:"唐三藏",mobile:'15625555555',address:'东土大唐'},
        {isDefault:false,id:3,name:"唐三藏",mobile:'15625555555',address:'东土大唐'},
        {isDefault:false,id:4,name:"唐三藏",mobile:'15625555555',address:'东土大唐'},
        {isDefault:false,id:5,name:"唐三藏",mobile:'15625555555',address:'东土大唐'}
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
  .address-list{
    .address-item{
      background-color: #ffffff;
      margin-top:10px;
    }

    .item-op{
      color: #FF4354;
      padding: 10px 15px;
      border-bottom: 1px solid #ededed;
    }
    a:link,a:visited{
      color: #FF4354;
    }
    .item-con{
      padding: 10px 15px;
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

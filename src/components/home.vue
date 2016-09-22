<template>
<div>
 <page-header title="优选圈"></page-header>
    <div class="goods-list">
   <div class="goods-item" v-for="item in goods">
      <div class="item-op">
        <img v-bind:src="item.url">
      </div>
      <div class="item-con">
        <p>{{item.name}}</p>
        <p><span class="c_ff4354">￥{{item.price}}</span><span class="f-r c_ccc">{{item.left}}</span></p>
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
      goods:[
        {price:28,id:0,name:"满减【三只松鼠_琥珀核桃仁165g】坚果特产休闲零食纸皮核桃",url:'http://img10.360buyimg.com/n1/jfs/t2821/18/1316712878/430655/c65ffb7/573c06a0N956686b0.jpg',left:'4/50'},
        {price:28,id:1,name:"旺旺旺仔牛奶2940ml原味245 ml× 8罐+苹果味245ml×4罐",url:'http://img14.360buyimg.com/n1/jfs/t2623/71/2055615738/228070/6f87f326/57553c7aNa8b4b9c3.jpg',left:'4/50'},
        {price:28,id:1,name:"旺旺旺仔牛奶2940ml原味245 ml× 8罐+苹果味245ml×4罐",url:'http://img14.360buyimg.com/n1/jfs/t2623/71/2055615738/228070/6f87f326/57553c7aNa8b4b9c3.jpg',left:'4/50'},
        {price:28,id:2,name:"满减【三只松鼠_琥珀核桃仁165g】坚果特产休闲零食纸皮核桃",url:'http://img10.360buyimg.com/n1/jfs/t2821/18/1316712878/430655/c65ffb7/573c06a0N956686b0.jpg',left:'4/50'},
        {price:28,id:3,name:"满减【三只松鼠_琥珀核桃仁165g】坚果特产休闲零食纸皮核桃",url:'http://img10.360buyimg.com/n1/jfs/t2821/18/1316712878/430655/c65ffb7/573c06a0N956686b0.jpg',left:'4/50'},
        {price:28,id:1,name:"旺旺旺仔牛奶2940ml原味245 ml× 8罐+苹果味245ml×4罐",url:'http://img14.360buyimg.com/n1/jfs/t2623/71/2055615738/228070/6f87f326/57553c7aNa8b4b9c3.jpg',left:'4/50'},
        {price:28,id:4,name:"满减【三只松鼠_琥珀核桃仁165g】坚果特产休闲零食纸皮核桃",url:'http://img10.360buyimg.com/n1/jfs/t2821/18/1316712878/430655/c65ffb7/573c06a0N956686b0.jpg',left:'4/50'},
        {price:28,id:1,name:"旺旺旺仔牛奶2940ml原味245 ml× 8罐+苹果味245ml×4罐",url:'http://img14.360buyimg.com/n1/jfs/t2623/71/2055615738/228070/6f87f326/57553c7aNa8b4b9c3.jpg',left:'4/50'},
        {price:28,id:5,name:"满减【三只松鼠_琥珀核桃仁165g】坚果特产休闲零食纸皮核桃",url:'http://img10.360buyimg.com/n1/jfs/t2821/18/1316712878/430655/c65ffb7/573c06a0N956686b0.jpg',left:'4/50'}
      ]
    }
  },
  components: {PageHeader:PageHeader}
}
</script>
<style lang='less'>
  .goods-list{
      margin-top:10px;
    .goods-item{
      background-color: #ffffff;
      box-sizing: border-box;
      float: left;
      width: 50%;
      border-right: 1px solid #ededed;

      img{
        width: 100%;
      }
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
      border-bottom: 1px solid #ededed;
      color: #717171;
    }

    .c_333{
      color: #333;
    }
    .c_ccc{
      color: #ccc;
    }
        .c_ff4354{
      color:#ff4354;
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

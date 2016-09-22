<template>
<div  transition="outLeftInRight">
  <div class="page index">
   <router-view></router-view>
  </div>
  <nav>
   <a class="home" v-link="{ path: '/index/home' }"><i></i>优选圈</a>
   <a class="topics" v-link="{ path: '/index/topics' }"><i></i>游记</a>
   <a class="message" v-link="{ path: '/index/message' }"><i></i>购物车</a>
   <a class="user" v-link="{ path: '/index/user' }"><i></i>个人中心</a>
  </nav>
</div>
</template>

<script>
export default{
  data(){
    return {
      goods:[
        {price:28,id:0,name:"满减【三只松鼠_琥珀核桃仁165g】坚果特产休闲零食纸皮核桃肉",url:'//img10.360buyimg.com/n1/jfs/t2821/18/1316712878/430655/c65ffb7/573c06a0N956686b0.jpg',address:'东土大唐'},
        {price:28,id:1,name:"满减【三只松鼠_琥珀核桃仁165g】坚果特产休闲零食纸皮核桃肉",url:'//img10.360buyimg.com/n1/jfs/t2821/18/1316712878/430655/c65ffb7/573c06a0N956686b0.jpg',address:'花果山水帘洞'},
        {price:28,id:2,name:"满减【三只松鼠_琥珀核桃仁165g】坚果特产休闲零食纸皮核桃肉",url:'//img10.360buyimg.com/n1/jfs/t2821/18/1316712878/430655/c65ffb7/573c06a0N956686b0.jpg',address:'东土大唐'},
        {price:28,id:3,name:"满减【三只松鼠_琥珀核桃仁165g】坚果特产休闲零食纸皮核桃肉",url:'//img10.360buyimg.com/n1/jfs/t2821/18/1316712878/430655/c65ffb7/573c06a0N956686b0.jpg',address:'东土大唐'},
        {price:28,id:4,name:"满减【三只松鼠_琥珀核桃仁165g】坚果特产休闲零食纸皮核桃肉",url:'//img10.360buyimg.com/n1/jfs/t2821/18/1316712878/430655/c65ffb7/573c06a0N956686b0.jpg',address:'东土大唐'},
        {price:28,id:5,name:"满减【三只松鼠_琥珀核桃仁165g】坚果特产休闲零食纸皮核桃肉",url:'//img10.360buyimg.com/n1/jfs/t2821/18/1316712878/430655/c65ffb7/573c06a0N956686b0.jpg',address:'东土大唐'}
      ]
    }
  }
}
</script>

<style lang="less">
.page{
  background-color:#f8f8f8;
  position: absolute;
  top: 0px;
  padding-top:50px;
  left: 0px;
  right: 0px;
  bottom: 60px;
  overflow: auto;
  text-align: left;

  &.no-nav{
    bottom: 0px;
  }
}
  nav{
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 60px;
    display: flex;
    border-top:1px solid #ededed;
    background-color: #fff;

    a:link,a:visited{
      text-decoration:none;
      flex: 1;
      text-align: center;
      box-sizing: border-box;
/*      border-right: 1px solid #ededed;*/
      color: #666;
      padding-top: 5px;
    }
    a:last-child{
      border-right: none;
    }
    a.v-link-active{
      color: #FF4354;
    }
    a i{
      display: block;
      margin: 0 auto;
      width: 25px;
      height: 25px;
    }
    a.home.v-link-active i{
      background: url('../images/nav-home-on.png') no-repeat center;
      background-size: contain;
    }
    a.home i{
      background: url('../images/nav-home-off.png') no-repeat center;
      background-size: contain;
    }
    a.topics.v-link-active i{
      background: url('../images/nav-circle-on.png') no-repeat center;
      background-size: contain;
    }
    a.topics i{
      background: url('../images/nav-circle-off.png') no-repeat center;
      background-size: contain;
    }
    a.message.v-link-active i{
      background: url('../images/nav-message-on.png') no-repeat center;
      background-size: contain;
    }
    a.message i{
      background: url('../images/nav-message-off.png') no-repeat center;
      background-size: contain;
    }
    a.user.v-link-active i{
      background: url('../images/nav-mine-on.png') no-repeat center;
      background-size: contain;
    }
    a.user i{
      background: url('../images/nav-mine-off.png') no-repeat center;
      background-size: contain;
    }
  }
</style>

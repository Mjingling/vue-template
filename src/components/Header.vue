<template>
  <div class="header">
  {{title}}
  <a v-link="{ path: right.url }" class="right link">{{right.text}}</a>
  <a v-link="{ path: left.url }" class="left link">{{left.text}}</a>
  </div>
</template>

<script>
export default{
  data(){
    return {}
  },
  props:{
    title:{
      type:String,
      required:true
    },
    left:{
      type:Object,
      default:function(){
        return {text:"",url:''};
      }
    },
    right:{
      type:Object,
      default:function(){
        return {text:"",url:''};
      }
    }
  }
}
</script>

<style lang="less">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 5px 4em;
  line-height: 40px;
  text-align: center;
  color: #333;
  background: #ffffff;
  border-bottom: 1px solid #ededed;
  z-index: 999;
}
.header .link {
  position: absolute;
  top: 5px;
  color: #FF4354;
} 
.header .right {
  right: 10px;
}
.header .left {
  left: 10px;
}

.outLeftInRight-transition,
.fadeOutLeft-transition, 
.fadeInLeft-transition {
  transition: transform .3s ease-in-out;
}
/* 进入时的状态，从右开始 */
.outLeftInRight-enter,
.fadeInLeft-enter,
.fadeInLeft-leave {
  transform: translateX(100%);
}
/* 离开时的状态，向左移动 */
.outLeftInRight-leave,
.fadeOutLeft-enter,
.fadeOutLeft-leave {
  transform: translateX(-100%);
}
</style>
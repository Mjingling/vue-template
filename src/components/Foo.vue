<template>
<div class="index" class="page index" transition="outLeftInRight">
  <h1>Hello  {{msg}} </h1>
  <div>我是首页</div>
</div>
<router-view></router-view>
</template>

<script>
export default{
  data(){
    return {msg: 'world'}
  }
}
</script>

<style lang="less">
h1{
  text-align: center;
  color:red
}
</style>
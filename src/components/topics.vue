<template>
<div>
 <page-header title="游记"></page-header>
 <div class="msg-item" v-for="item in msgs" track-by="$index">{{item}}</div >
</div>
</template>

<script>
var Vue=require('vue');
var PageHeader=Vue.component('PageHeader', require("./Header.vue"));
export default{
  data(){
    return {
      msgs:[
            '去希腊，与众神共饮一杯！！！',
            '去希腊，与众神共饮一杯！！！',
            '去希腊，与众神共饮一杯！！！',
            '去希腊，与众神共饮一杯！！！',
            '去希腊，与众神共饮一杯！！！',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
            '我是新闻内容111',
          ]
    }
  },
  components: {PageHeader:PageHeader}
}
</script>

<style lang="less">
body {
  margin: 0;
}
a {
  text-decoration: none;
}
  .msg-item{
    padding: 10px 15px;
    border-bottom: 1px solid #ededed;
    background-color: #ffffff;
  }
</style>

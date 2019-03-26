<template>
  <div class="like">
    <img src="@/assets/img/like/like.png">
    <span>{{favNum}}</span>
  </div>
</template>
<script>
export default {
  name:'like',
  props:{
    favNum:Number
  },
  data () {
    return {}
  }
}
</script>
<style lang='scss' scoped>
  .like{
    img{
      width: 16px;
      height: 14px;
    }
    span{
      font-size: 12px;
      display: inline-block;
      color: #c5c5c5;
      margin-left: 5px;
      position: relative;
      top: -10px;
    }
  }
</style>

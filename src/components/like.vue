<template>
  <div class="like" @click="isLike">
    <img :src='src' />
    <span>{{num}}</span>
  </div>
</template>
<script>
import imglike from '../assets/img/like/like.png'
import imgunlike from '../assets/img/like/like@dis.png'
export default {
  name:'like',
  props:{
    favNum:Number
  },
  data () {
    return {
      like:false
    }
  },
  computed:{
    src () {
      return this.like?imglike:imgunlike
    },
    num () {
      return this.like?this.favNum+1:this.favNum
    }
  },
  methods:{
    isLike  () {
      this.like = !this.like
    }
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

<template>
  <div class="like" @click="isLike">
    <img :src='src' />
    <span>{{num}}</span>
  </div>
</template>
<script>
import imglike from '../assets/img/like/like.png'
import imgunlike from '../assets/img/like/like@dis.png'
import { saveIndexLike, getIndexLike } from '../utils/localStorage'

export default {
  name:'like',
  props:{
    favNum:Number,
    like:Boolean,
    index:Number
  },
  data () {
    return {
      islike:this.like
    }
  },
  watch: {
    index (val) {
      if(getIndexLike(val)){
        this.islike = getIndexLike(val)
      }else{
        this.islike = this.like
      }
    }
  },
  computed:{
    src () {
      return this.islike?imglike:imgunlike
    },
    num () {
      return this.islike?this.favNum+1:this.favNum
    }
  },
  methods:{
    isLike  () {
      saveIndexLike(this.index,!this.islike)
      this.islike = !this.islike
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

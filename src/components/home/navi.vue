<template>
  <div class="navi">
    <div>
      <img :src="left" alt="" @click="next">
      <div>{{content}}</div>
      <img :src="right" alt="" @click="prv">
    </div>
  </div>
</template>
<script>
import leftimg from '@/assets/img/navi/triangle@left.png'
import rightimg from '@/assets/img/navi/triangle@right.png'
import leftdisimg from '@/assets/img/navi/triangle.dis@left.png'
import rightdisimg from '@/assets/img/navi/triangle.dis@right.png'
export default {
  name:'bar',
  props:{
    content:String,
    isLeftdis:Boolean,
    isRightdis:Boolean
  },
  computed: {
    left () {
      return this.isLeftdis? leftdisimg:leftimg
    },
    right () {
      return this.isRightdis? rightdisimg:rightimg
    }
  },
  methods: {
    prv () {
      this.$emit('prv')
    },
    next () {
      this.$emit('next')
    }
  }
}
</script>

<style lang='scss' scoped>
  .navi{
    height: 40px;
    >div{
      margin: 0 auto;
      height: 40px;
      display:flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      background: #c4c1c1;
      border-radius: 5px;
      width: 330px;
      img{
        width: 50px;
        margin: 0 15px;
      }
    }
  }
</style>

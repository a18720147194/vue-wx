<template>
  <div class="movie">
    <div class="big"><img :src="imgSrc" /></div>
    <div class="small">
      <img src="@/assets/img/text/music.png" alt="" />
      <img src="@/assets/img/music/player@play.png" @click="saySorry" alt="">
    </div>
    <div class="text"> {{content}}</div>
  </div>
</template>
<script>
export default {
  name:'music',
  props:{
    res:Object
  },
  data () {
    return {
      imgSrc: '',
      content:''
    }
  },
  watch: {
    res (val) {
      this.imgSrc = val.image
      this.content = val.content
    }
  },
  methods: {
    saySorry () {
      alert('抱歉，暂未实现该功能')
    }
  }
}
</script>
<style lang='scss' scoped>
  .movie{
    .big {
      img{
        margin: 20px 0;
        border-radius: 50%;
        width:200px;
      }
    }
    .small{
      position: relative;
      :first-child{
        position: absolute;
        width: 28px;
        left: 20px;
        top: -45px;
      }
      :last-child{
        width: 50px;
        position: relative;
        top: -150px;
      }
    }
    .text{
      width: 250px;
      margin-top: 100px;
      font-size: 18px;
    }
  }
</style>

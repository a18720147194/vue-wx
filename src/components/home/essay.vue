<template>
  <div class="movie">
    <div class="big"><img :src="imgSrc" /></div>
    <div class="small"><img src="@/assets/img/text/essay.png" alt="" /></div>
    <div class="text"> {{content}}</div>
  </div>
</template>
<script>
export default {
  name:'essay',
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
  }
}
</script>
<style lang='scss' scoped>
  .movie{
    .big {
      img{
        width: 100%;
      }
    }
    .small{
      position: relative;
      img{
        position: absolute;
        width: 30px;
        left: 20px;
        top: -45px;
      }
      
    }
    .text{
      width: 250px;
      margin-top: 100px;
      font-size: 18px;
    }
  }
</style>

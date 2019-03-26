<template>
  <div class="movie">
    <div class="big"><img :src="imgSrc" /></div>
    <div class="small"><img src="@/assets/img/text/movie.png" alt="" /></div>
    <div class="text"> 11</div>
  </div>
</template>
<script>
export default {
  name:'movie',
  props:{
    res:Object
  },
  data () {
    return {
      imgSrc: ''
    }
  },
  watch: {
    res (val) {
      this.imgSrc = val.image
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
  }
</style>

<template>
  <footer class="footer">
    <ul class="bar">
      <li @click.stop='classic'><router-link to='/classic'><img :src='imgc' alt=""><p>流行</p></router-link></li>
      <li @click.stop='book'><router-link to='/books'><img :src="imgb" alt=""><p>书籍</p></router-link></li>
      <li @click.stop='my'><router-link to='/my'><img :src="imgm" alt=""><p>喜欢</p></router-link></li>
    </ul>
  </footer>
</template>
<script>
// import { savePath, getPath } from '@/utils/localStorage'
import imgc1 from "@/assets/img/tab/classic.png"
import imgc2 from "@/assets/img/tab/classic@highlight.png"
import imgb1 from "@/assets/img/tab/book.png"
import imgb2 from "@/assets/img/tab/book@highlight.png"
import imgm1 from "@/assets/img/tab/my.png"
import imgm2 from "@/assets/img/tab/my@highlight.png"
export default {
  data () {
    return {
      isimgc:true,
      isimgb:false,
      isimgm:false
    }
  },
  computed: {
    imgc () {
      return this.isimgc?imgc2:imgc1
    },
    imgb () {
      return this.isimgb?imgb2:imgb1
    },
    imgm () {
      return this.isimgm?imgm2:imgm1
    }
  },
  methods: {
    clear () {
      this.isimgc=false
      this.isimgb=false
      this.isimgm=false
    },
    classic () {
      this.clear()
      this.isimgc=true
    },
    book () {
      this.clear()
      this.isimgb=true
    },
    my () {
      this.clear()
      this.isimgm=true
    }
  }
}
</script>

<style lang='scss'>
.footer{
  background: #fff;
  border-top: #f5f5f5 1px solid;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.bar{
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  font-size: 0px;
  img{
    width:30px;
  }p{
    font-size: 14px;
  }
}
</style>
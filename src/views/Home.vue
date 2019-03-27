<template>
  <div class="home">
    <header class="home-head">
      <div class="date">
        <span>No.</span>
        <h2>{{num}}</h2>
        <p></p>
        <div>
          <p>{{month}}</p>
          <p>{{year}}</p>
        </div>
      </div>
      <div class="like">
        <like :favNum='favNum' />
      </div>
    </header>
    <center class="home-center">
      <movie :res='res' />
    </center>
    <navi class="home-navi" :content='title' :isLeftdis='isLeftdis' :isRightdis='isRightdis'/>
  </div>
</template>

<script>
import like from '../components/like'
import movie from '../components/home/movie'
import navi from '../components/home/navi'
import { getNewest } from '../api/http'
import { saveIndex, getIndex, saveMaxIndex, getMaxIndex } from '../utils/localStorage'
export default {
  name: 'home',
  components: {
    like,
    movie,
    navi
  },
  data () {
    return {
      res:null,
      month:'1',
      year:0,
      dateArr:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
      favNum: 0,
      title:'',
      num:''
    }
  },
  computed: {
    isLeftdis () {
      return getIndex()>=getMaxIndex()
    },
    isRightdis () {
      return getIndex()<=1
    }
  },
  mounted () {
    getNewest().then((res)=>{
      console.log(res)
      let data = res.data
      this.res = data
      this.favNum = data.fav_nums
      this.title = data.title
      this.num = this.shift(data.index)
      saveMaxIndex(data.index)
      saveIndex(data.index)
    })
    this.getDate()
  },
  methods: {
    shift (num) {
      if(num<=9){
        return '0'+num
      }else{
        return ''+num
      }
    },
    getDate () {
      let date = new Date()
      this.year = date.getFullYear()
      this.month = this.dateArr[date.getMonth()]
    }
  }
}
</script>
<style lang='scss' scoped>
  .home-head{
    padding-top: 10px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .date{
      display: flex;
      align-items: baseline;
      margin-left: 8px;
      div{
        font-size: 12px;
        position: relative;
        top: -12px;
        border-left: 1px solid;
        padding-left: 5px;
        margin-left: 5px;
        p{
          line-height: 12px
        }
      }
    }
    .like{
      margin-right: 10px;
    }
  }
  .home-center{
      height: 500px;
  }    
  .home-navi{
    position: fixed;
    bottom: 80px;
    width: 100%;
  }
</style>

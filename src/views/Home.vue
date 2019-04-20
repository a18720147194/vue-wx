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
        <like :favNum='favNum' :like='isLike' :index='index'/>
      </div>
    </header>
    <center class="home-center">
      <movie :res='res' v-show="type==100"/>
      <music :res='res' v-show="type==200"/>
      <essay :res='res' v-show="type==300"/>
    </center>
    <navi class="home-navi" 
      :content='title' 
      :isLeftdis='isLeftdis' 
      :isRightdis='isRightdis'
      @prv='prv'
      @next='next'
      />
  </div>
</template>

<script>
import like from '../components/like'
import movie from '../components/home/movie'
import music from '../components/home/music'
import essay from '../components/home/essay'
import navi from '../components/home/navi'
import { getNewest, getPrevious, getNext } from '../api/http'
import { saveIndex, getIndex, saveMaxIndex, getMaxIndex } from '../utils/localStorage'
export default {
  name: 'home',
  components: {
    like,
    movie,
    navi,
    music,
    essay
  },
  data () {
    return {
      res:null,
      month:'1',
      year:0,
      dateArr:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
      favNum: 0,
      title:'',
      num:'',
      type:0,
      index:0,
      isLike:false
    }
  },
  computed: {
    isLeftdis () {
      return this.index >= getMaxIndex()
    },
    isRightdis () {
      return this.index <=1
    }
  },
  watch: {
    res (res) {
      // console.log(res)
      if (res!=null) {
        this.setData(res)
      }
    }
  },
  mounted () {
    getNewest().then((res)=>{
      this.res = res.data
      saveMaxIndex(res.data.index)
    }).catch((error)=>{
      console.log(error)
    })
    this.getDate()
  },
  methods: {
    setData (data) {
      this.favNum = data.fav_nums
      this.title = data.title
      this.num = this.shift(data.index)
      this.type = data.type
      this.index = data.index
      this.isLike = data.like_status===0?false:true
      saveIndex(data.index,data)
    },
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
    },
    prv () {
      if (!this.isRightdis) {
        if (getIndex(this.index-1)){
          this.res = getIndex(this.index-1)
        }else{
          getPrevious(this.index).then((res)=>{
            this.res = res.data
          })
        }
      }else{
        this.$message('已经是第一期了呢');
      }
    },
    next () {
      if(!this.isLeftdis){
        if (getIndex(this.index+1)){
          this.res = getIndex(this.index+1)
        }else{
          getNext(this.index).then((res)=>{
            this.res = res.data
          })
        }
      }else{
        this.$message('已经是最新一刊了哦');
      }
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

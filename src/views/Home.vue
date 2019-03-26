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
  </div>
</template>

<script>
import like from '../components/home/like'
import movie from '../components/home/movie'
import { get } from '../api/http'
export default {
  name: 'home',
  components: {
    like,
    movie
  },
  data () {
    return {
      res:null,
      num:'08',
      month:'1',
      year:0,
      dateArr:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
      favNum: 0
    }
  },
  mounted () {
    get().then((res)=>{
      console.log(res)
      let data = res.data
      this.res = data
      this.favNum = data.fav_nums
    })
    let date = new Date()
    this.year = date.getFullYear()
    this.month = this.dateArr[date.getMonth()]
  }
}
</script>
<style lang='scss' scoped>
  .home-head{
    padding-top: 10px;
    background:yellow;
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
      background:green;
      height: 500px;
  }    
     
</style>

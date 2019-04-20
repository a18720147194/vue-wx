<template>
  <div class="books" >
    <header v-show="!searching">
      <div @click="search">
        <i class="el-icon-search"></i>
        <span>搜索书籍</span>
      </div>
    </header>
    <center v-show="!searching">
      <div></div>
      <p>精选</p>
      <div class="books-list">
        <div v-for="(item,i) in list" :key='item.id' @click="bookDetail(i)">
          <img :src="item.image" >
          <div>
            <p>{{item.title}}</p>
            <span>{{item.author}}</span>
            <span>{{item.fav_nums}}喜欢</span>
          </div>
        </div>
      </div>
      <div class="last"></div>
    </center>
    <search @back='searchBack' v-show="searching" />
  </div>
</template>

<script>
import search from '@/components/books/search'
import { getHostBook } from '@/api/http'
export default {
  name: 'books',
  components:{
    search
  },
  data () {
    return {
      list:[],
      searching:false
    }
  },
  methods: {
    search () {
      this.searching = true
    },
    searchBack(){
      this.searching = false
    },
    bookDetail (i) {
      this.$router.push(`/bookDetail?q=${this.list[i].id}`)
    }
  }, 
  mounted () {
    getHostBook().then((res)=>{
      this.list = res.data
    })
  }
}
</script>
<style lang='scss' scoped>
.books{
  >header{
    width: 100%;
    height: 36px;
    background:#fff;
    padding: 5px 0;
    position: fixed;
    z-index: 100;
    div{
      height: 36px;
      width: 300px;
      background:#f5f5f5;
      margin: 0 auto;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      span{
        margin: 0 10px;
      }
    }
  }
  >center{
    width: 100%;
    min-height: 1500px;
    background: #f5f5f5;
    :first-child,.last{
      height: 60px;
    }
    .books-list{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 0 40px;
      >div{
        margin-top: 20px;
        width: 110px;
        height: 140px;
        background:yellow;
        position: relative;
        >img{
          width: 100%;
          height: 130px;
        }
        >div{
          height: 45px;
          width: 100%;
          background: #fff;
          position: absolute;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          p{
            max-width: 110px;
            height: 14px;
            font-size: 12px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: left;
            margin: 0 5px;
          }
          span{
            font-size: 10px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: left;
            margin: 0 5px;
            color:#b5b5b5;
          }
          :last-child{
            margin-top: 5px;
            position: relative;
            left: 60px;
          }
        }
      }
    }
  }
}
</style>

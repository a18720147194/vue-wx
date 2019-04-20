<template>
  <div class="search">
    <header>
      <div class="input">
        <i class="el-icon-search"></i>
        <input placeholder="书籍名" type="text" v-model="input" @keydown='keydown'>
        <i class="el-icon-circle-close-outline" @click="clearText"></i>
      </div>
      <span @click="back">取消</span>
    </header>
    <div class="history" v-show="!finished">
      <div class="title">
        <div></div>
        <h5>历史搜索</h5>
      </div>
      <div class="sp">
        <span v-for="(item,i) in historyList" :key="i" @click="spanClick(item)" >{{item}}</span>
      </div>
    </div>
    <div class="hot" v-show="!finished">
      <div class="title">
        <div></div>
        <h5>热门搜索</h5>
      </div>
      <div class="sp">
        <span v-for="(item,i) in hotList" :key="i" @click="spanClick(item)" >{{item}}</span>
      </div>
    </div>
    <div class="book" v-show="finished">
      <div class="books-list">
        <div v-for="(item,i) in searchList" :key='item.id' @click="bookDetail(i)">
          <img :src="item.image" >
          <div>
            <p>{{item.title}}</p>
            <span>{{item.author}}</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getHotWord, getSearchWord } from '@/api/http'
export default {
  name:'search',
  data () {
    return {
      input:'',
      hotList:[],
      finished:false,
      searchList:[],
      historyList:[]
    }
  },
  methods: {
    clearText () {
      this.input = ''
      this.finished = false
      this.searchList = []
    },
    spanClick (str) {
      if(!this.historyList.includes(str)){
        this.historyList.push(str)
      }
      this.input = str
      this.finished = true
      getSearchWord(str).then((res)=>{
        console.log(res)
        this.searchList = res.data.books
      })
    },
    back (){
      this.finished = false
      this.searchList = []
      this.$emit('back')
    },
    keydown (e) {
      if(e.keyCode===13){
        this.spanClick(this.input)
      }
    },
    bookDetail (i) {
      this.$router.push(`/bookDetail?q=${this.searchList[i].id}`)
    }
  },
  mounted () {
    getHotWord().then((res)=>{
      this.hotList = res.data.hot
    })
  }
}
</script>
<style lang='scss' scoped>
.search{
  z-index:101;
  header{
    z-index: 102;
    height: 50px;
    width: 100%;
    background: #fff;
    border-bottom: 1px #f5f5f5 solid;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .input{
      height: 34px;
      background: #f5f5f5;
      border-radius: 15px;
      margin-left: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      input{
        background:#f5f5f5;
        border: none;
        width: 250px;
        outline: none
      }
      i{
        margin: 0 10px;
      }
    }
    span{
      margin-right: 10px;
    }
  }
  >.history{
    .title{
      display: flex;
      justify-content: flex-start;
      div{
        width: 10px;
        height: 20px;
        background: #000;
        margin-right: 10px;
      }
    }
    .sp{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      justify-content: flex-start;
      padding: 10px;
      span{
        font-size: 14px;
        background: #f5f5f5;
        margin:5px 0 0 10px;
      }
    }
    padding-top: 80px;
    height: 100px;
  }
  >.hot{
    .title{
      display: flex;
      justify-content: flex-start;
      div{
        width: 10px;
        height: 20px;
        background: #000;
        margin-right: 10px;
      }
    }
    .sp{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      justify-content: flex-start;
      padding: 10px;
      span{
        font-size: 14px;
        background: #f5f5f5;
        margin:5px 0 0 10px;
      }
    }
  }
  .book{
    padding-top: 60px;
    padding-bottom: 60px;
    background: #f5f5f5;
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

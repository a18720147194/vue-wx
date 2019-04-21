<template>
  <div class="detail" v-if="isGet">
    <div class="header" >
      <img :src="bookDetail.image" alt="" >
      <p>{{bookDetail.title}}</p>
      <span>{{bookDetail.author}}</span>
    </div>
    <div class="comment">
      <p>短评</p>
      <div class="sp">
        <span v-for="(item,i) in commentList" :key="i" >{{item.content}} +{{item.nums}}</span>
      </div>
    </div>
    <div class="content">
      <h5>内容简介</h5>
      <p>{{transition()}}</p>
    </div>
    <div class="msg">
      <h5>书本信息</h5>
      <p>出版社&nbsp;&nbsp;&nbsp;{{bookDetail.publisher}}</p>
      <p>出版年&nbsp;&nbsp;&nbsp;{{bookDetail.pubdate}}</p>
      <p>页数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{bookDetail.pages}}</p>
      <p>定价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{bookDetail.price}}</p>
      <p>装帧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{bookDetail.binding}}</p>
    </div>
  </div>
</template>
<script>
import { getBookDetail, getBookComment } from '@/api/http'
export default {
  name: 'bookDetail',
  data () {
    return {
      isGet:false,
      bookDetail:null,
      commentList:null
    }
  },
  methods:{
    transition(){
      var reg = /\\n/g 
      var str = this.bookDetail.summary.replace(reg,'\n')
      return str
    }
  },
  mounted () {
    var id = this.$route.query.q
    getBookDetail(id).then((res)=>{
      this.isGet = true
      this.bookDetail = res.data
    })
    getBookComment(+id).then((res)=>{
      this.commentList = res.data.comments
    })
  }
}
</script>
<style lang='scss' scoped> 
  .detail{
    background: #f5f5f5;
    padding-bottom: 50px;
    .header{
      width: 100%;
      margin-bottom: 10px;
      padding-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #fff;
      img{
        width: 100px;
        height: 160px;
      }
      p{
        margin: 10px 0  5px ;
      }
      span{
        font-size: 14px;
        color: #868282
      }
    }
    .comment{
      margin-bottom: 10px;
      background: #fff;
      p{
        text-align: center;
      }
      .sp{
        display: flex;
        flex-wrap: wrap;
        span{
          margin:5px 10px;
          background: #f5f5f5;
        }
        :first-child{
          background: rgba(241, 121, 9, 0.25);
        }
        :nth-child(2){
          background: rgba(110, 235, 8, 0.25);
        }
        :nth-child(3){
          background: rgba(12, 165, 236, 0.25);
        }
      }
      
    }
    .content{
      margin-bottom: 10px;
      text-align: center;
      background: #fff;;
      p{
        text-align: left;
        font-size: 12px;
      }
    }
    .msg{
      text-align: center;
      background: #fff;
      p{
        font-size: 12px;
        color: #868282;
        text-align: left;
      }
    }
  }
</style>

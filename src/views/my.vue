<template>
  <div class="my">
    <div class="header">
      <div class="about" @click="aboutMe">
        <img src="@/assets/img/my/about.png" alt="">
        <span>关于我</span>
      </div>
      <div class="likeBooks" @click="likeBook">
        <span>111</span>
        <span>喜欢的书</span>
      </div>
    </div>
    <div class="aboutMe" v-show="isShow">
      <img src="@/assets/img/my/aboutMe.png" alt=""> 
    </div>
    <div class="like" v-show="!isShow">
      <div class="item"  v-for="(item,i) in likeList" :key="i">
        <div class="title">
          <span>{{typeTransition(item.type)}}</span>
          <span>{{item.fav_nums}}</span>
        </div>
        <div class="img">
          <img :src="item.image" alt="">
        </div>
        <div class="content">
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLikeClassic } from '../api/http'
export default {
  name: 'my',
  data () {
    return {
      isShow:false,
      likeList: [],
      computed:''
    }
  },
  methods: {
    aboutMe () {
      this.isShow = true
    },
    likeBook () {
      this.isShow = false
    },
    typeTransition (num) {
      switch(num){
        case 100 : return "电影";
        case 200 : return "音乐";
        case 300 : return "句子";
      }
    }
  },
  mounted () {
    getLikeClassic().then((res)=>{
      this.likeList = res.data
      
    })
  }
}
</script>
<style lang='scss' scoped>
.my{
  background: #f5f5f5;
  .header{
    height: 260px;
    width: 100%;
    background-image: url('../assets/img/my/my@bg.png');
    background-repeat : round;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding-bottom: 40px;
    .about{
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 20px;
      }
      span{
        padding-top: 5px;
        color: #a39f9f;
      }
    }
    .likeBooks{
      display: flex;
      flex-direction: column;
      align-items: center;
      :last-child{
        padding-top: 5px;
        color: #a39f9f;
      }
    }
  }
  .aboutMe{
    width: 100%;
    height: 1300px;
    img{
      width: 100%;
    }
  }
  .like{
    padding-bottom: 60px;
    width: 100%;
    background: #f5f5f5;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .item{
      margin-top: 10px;
      background: #fff;;
      width: 170px;
      height: 280px;
      .title{
        padding: 5px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        :first-child{
          margin-left: 8px;
          padding:1px 10px ;
          background: #f5f5f5;
          font-size: 14px;
        }
      }
      img{
        margin: 10px 0;
        width: 100%;
        height: 180px; 
      }
      p{
        text-align: center;
        font-size: 14px;
      }
    }
  }
}
</style>

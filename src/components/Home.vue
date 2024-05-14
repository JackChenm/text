<template>
  <div class="home">
    <header>
      <p class="mobile">
        贵和后台
      </p>
      <div class="user">
        <p>你好！五哈哈用户</p>
        <span>三</span>
      </div>
    </header>
    <div class="left">
      <img src="../static/img/首页.png">
      <span>首页</span>
    </div>
    <main>
      <ul>
        <li class="account" @click="clickAction()">
            <img src="../static/img/1.png" alt="">
            <span>活动管理</span>
        </li>
        <li @click="clickAction()">
          <img src="../static/img/容器 18@1x.png" alt="">
          <span>报表</span>
        </li> 
        <li @click="clickAction()">
          <img src="../static/img/容器 19@1x.png" alt="">
          <span>账号管理</span>
        </li>   
           <li @click="clickAction()">
          <img src="../static/img/容器 20@1x.png" alt="">
          <span>经销商管理</span>
        </li>   
           <li @click="clickAction()">
          <img src="../static/img/容器 21@1x.png" alt="">
          <span>活动主页</span>
        </li>   
           <li @click="clickAction()">
          <img src="../static/img/容器 22@1x.png" alt="">
          <span>客户管理</span>
        </li>   
           <li @click="clickAction()">
          <img src="../static/img/容器 23@1x.png" alt="">
          <span>经销商审核</span>
        </li>   
           <li @click="clickAction()">
          <img src="../static/img/容器 24@1x.png" alt="">
          <span>品牌管理</span>
        </li>   
           <li @click="clickAction()">
          <img src="../static/img/容器 25@1x.png" alt="">
          <span>首付款管理</span>
        </li>
        <li style="border:0" class="last"></li>
      </ul>
    </main>
  </div>
  </template>
  <script lang="ts" setup>
import router from '../router';
//点击跳转
const clickAction = ()=>{
  router.push({
        path:'/Account'
      })
    }
  </script>
  <style lang="scss" scoped>
  @media only screen and (min-width: 750px){
    header {
    display: none;
   }
   .home{
    height: 91%;
    padding-top: 62px;
    display: flex;
    .left{
      display: flex;
      flex-direction: column;
    //   justify-content: center;
      align-items: center;
      width: 88px;
      height: 100%;
      box-shadow: 0px 16px 36px 0px rgba(223, 113, 113, 0.13);
      font-size: 12px;
      img{
        margin-top: 20px;
        margin-bottom: 10px;
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }
    main{
      flex: 1;
      overflow: auto;
      ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-left: 100px;
        padding-right: 100px;
        .last{
          display: none;
        }
        li{
          width: 260px;
          height: 150px;
          margin-left: 68px;
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          border: 1px solid #E7E7E7;
          box-sizing: border-box;
          img{
            width: 133px;
            height: 101px;
          }
          &:hover{
            cursor: pointer;
            border: 1px solid #FF4D32;
            /* 后台 */
            box-shadow: 0px 16px 36px 0px rgba(223, 113, 113, 0.13);
          }
        }
      }
    }
   }
  }

  //移动端css样式
  @media only screen and (max-width: 750px) {
    .home{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .left{
        display: none;
      }
    }
    header{
    display: block;
      width: 100%;
      padding-top: 50px;
      height: 85px;
      .mobile{
        text-align: center;
      display: block;
      font-weight: 600;
      font-size: 18px;
      }
      .user{
        margin-top: 12px;
        height: 46px;
        opacity: 1;
        background: linear-gradient(109deg, #FF8B37 35%, #FF2D2D 99%);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 19px;
        padding-right: 21px;
        font-weight: 500;
        font-size: 14px;
        color: #fff;
      }
    }
    main{
      flex: 1;
      overflow: auto;
      &::-webkit-scrollbar{
        display: none;
      }
      ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        li{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          border: 1px solid #E7E7E7;
          width: 160px;
          height: 200px;
          margin: 5px;
          img{
            width: 100px;
            height: 100px;
            border: 1px dashed #bea6a6c1;
          }
          span{
            margin-top: 10px;
            font-weight: 700;
            font-size: 16px;
            color: #181818;
          }
        }
      }
      padding-bottom: 50px;
    }
  }
  
  </style>
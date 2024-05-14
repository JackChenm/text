<script setup lang="ts">
</script>

<template>
  <header>
    <div class="left ">
        <div class="logo"></div>
        <p>贵和永润有限公司后台管理系统</p>
    </div>
    <div class="right ">
        <p>吴哈哈</p>
        <img src="./static/img/圆形 17@1x.png" alt="">
    </div>

  </header>
 <router-view></router-view>
</template>

<style scoped>
    header{
      /* display: block; */
      position: fixed;
      top: 0px;
      left: 0px;
      right: 0px;
      height: 36px;
      padding-top: 12px;
      padding-bottom: 14px;
      padding-left: 24px;
      padding-right: 24px;
      background: linear-gradient(95deg, #FF8B37 38%, #FF2D2D 98%);
      color:#fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10000;
      .left{
          display: flex;
          font-size: 24px;
          font-weight:700;
          align-items: center;
          .logo{
            width: 48px;
            height: 48px;
            background-color: #fff;
            border-radius: 5px;
            margin-right: 16px;
          }
      }
      .right{
          display: flex;
          font-size: 14px;
          font-weight:500;
          align-items: center;
          p{
            margin-right: 16px;

          }
      }
    }

  @media only screen and (max-width: 750px) {
    header{
      display: none;
    }
  }
</style>

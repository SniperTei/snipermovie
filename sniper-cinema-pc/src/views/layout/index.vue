<script setup>
// user点击事件
const userClick = () => {
  console.log('userClick')
}
// logout点击事件
const logoutClick = () => {
  console.log('logoutClick')
}
</script>

<template>
  <div class="layout">
    <!-- 最上面的导航部分 -->
    <div class="nav">
      <div class="nav-category">
        <div class="nav-left">
          <img src="../../assets/logo.jpg" alt="logo" />
        </div>
        <div class="nav-right">
          <router-link to="/home">首页</router-link>
          <router-link to="/movie">电影</router-link>
          <router-link to="/drama">连续剧</router-link>
          <router-link to="/variety">综艺</router-link>
          <router-link to="/anime">动漫</router-link>
          <router-link to="/about">关于</router-link>
          <el-icon class="nav-right-icon" @click="userClick"><User /></el-icon>
          <el-icon class="nav-right-icon" @click="logoutClick"><SwitchButton /></el-icon>
          <!-- <el-button icon="el-icon-search"></el-button> -->
        </div>
      </div>
      <div class="nav-search">
        <div>
          <el-input placeholder="input search"></el-input>
        </div>
      </div>
    </div>
    <!-- 中间内容部分 -->
    <div class="content">
      <router-view />
    </div>
    <!-- 底部页脚 -->
    <div class="footer">
      <p>© 2024 Sniper 版权所有</p>
      <p>mail: sniper_zheng@163.com</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .layout {
    .nav {
      display: flex;
      flex-direction: column;
      padding: 10px 20px;
      background-color: #f0f0f0;
      .nav-category {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .nav-right {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          .nav-right-icon {
            margin-left: 20px;
          }
        }
      }
      img {
        width: 76px;
        height: 60px;
        // border-radius: 50%;
      }
      span {
        font-size: 20px;
        font-weight: bold;
        margin-left: 10px;
      }
      .nav-right {
        a {
          margin-left: 20px;
          text-decoration: none;
          color: #000;
          &:hover {
            color: #409eff;
          }
        }
      }
    }
    .content {
      padding: 20px;
    }
    .footer {
      text-align: center;
      padding: 10px;
      background-color: #f0f0f0;
    }
  }
</style>
<script setup>

</script>

<template>
  <div class="layout">
    <!-- 最上面的导航部分 -->
    <div class="nav">
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
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      background-color: #f0f0f0;
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
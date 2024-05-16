<script setup>
import { ref, onMounted } from 'vue'
// import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const username = ref('')
const password = ref('')
const router = useRouter()
// 登录方法
const doLogin = () => {
  // 用户名和密码都不为空就跳转
  if (!username.value || !password.value) {
    // 弹窗提示
    ElMessage({
      type: "error",
      message: "用户名和密码不能为空！",
  });
    return
  }
  // 登录成功后跳转到首页
  router.push('/')
  return {
    username,
    password,
  }
  // // 通过 store 获取用户信息
  // const store = useStore()
  // // 通过 router 获取路由信息
  // const router = useRouter()
  // // 登录方法
  // const login = () => {
  //   // 调用 store 中的 login 方法
  //   store.dispatch('login', { username: username.value, password: password.value }).then(() => {
  //     // 登录成功后跳转到首页
  //     router.push('/')
  //   })
  // }
  // return {
  //   username,
  //   password,
  //   login
  // }
}
// mounted
onMounted(() => {
  console.log('mounted')
})
</script>

<template>
  <div class="login">
    <h1>Login</h1>
    <div class="form">
      <el-input v-model="username"></el-input>
      <el-input v-model="password"></el-input>
      <el-button type="submit" @click="doLogin">Login</el-button>
    </div>
  </div>
</template>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

h1 {
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
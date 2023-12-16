<template>
  <div>
    <el-form :model="form" ref="form" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      title: '登录',
      is_login: true,
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      console.log(this.form)
    },
  }
}
</script>

<style scoped>

</style>

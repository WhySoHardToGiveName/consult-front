<template>
  <div>
    <div class="login-wrap">
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
        <div class="register-text">
          <p @click="handleCommand">注册帐号</p>
        </div>
      </el-form>
    </div>
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
    handleCommand() {
      this.$router.push("/userRegister");
    }
  }
}
</script>

<style scoped>
.login-wrap {
  width: 350px;
  height: 220px;
  padding: 20px 25px 0 25px;
  line-height: 40px;
  position: relative;
  display: inline-block;
  background-color: rgba(255, 255, 255,0.8);
  border-radius: 20px;
  margin-top: 40px;
}
.register-text{
  font-size:14px;
  line-height:10px;
  cursor: pointer;
}
.register-text:hover{
  text-decoration: underline;
}

</style>

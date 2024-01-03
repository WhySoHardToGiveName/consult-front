<template>
  <div>
    <div class="register-wrap">
      <el-card shadow="always">
      <div class="form">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
          <el-form-item prop="username" label="用户名">
            <el-input
                type="username"
                v-model="ruleForm.username"
                autocomplete="off"
                maxlength="10"
                show-word-limit
                @keyup.enter.native="register('ruleForm')"
            ></el-input>
          </el-form-item>
          <el-form-item prop="pass" label="密码">
            <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
                @keyup.enter.native="register('ruleForm')"
                show-password
            ></el-input>
          </el-form-item>
          <el-form-item prop="checkPass" label="确认密码">
            <el-input
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
                @keyup.enter.native="register('ruleForm')"
                show-password
            ></el-input>
          </el-form-item>
          <el-form-item class="register-btn">
            <el-button type="primary" @click="register('ruleForm')">注 册</el-button>
          </el-form-item>
        </el-form>
        <div class="login-text">
          <p @click="handleCommand">已有账号？直接登录</p>
        </div>
      </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "UerRegister",
  data() {
    var checkUsername = (rule, value, callback) => {
      const reg=/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;
      if (!value) {
        return callback(new Error('用户名不能为空'));
      } else if (!reg.test(value)) {
        callback(new Error('用户名由中英文、数字或下划线组成'))
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        var reg_pwd=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,18}$/;
        if (!reg_pwd.test(value)) {
          callback(new Error('密码至少同时包含字母和数字，且长度为8-18'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: '',
        email: '',
        pass: '',
        checkPass: '',
      },
      rules: {
        username: [
          { validator: checkUsername, trigger: 'blur'}
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    register: function (formName) {
      console.log(formName)
    },
    handleCommand() {
      this.$router.push("/login");
    },
  }
}
</script>

<style scoped>
.register-wrap {
  width: 350px;
  height: 350px;
  padding: 20px 25px 0 25px;
  line-height: 40px;
  position: relative;
  display: inline-block;
  background-color: rgba(255, 255, 255,0.8);
  border-radius: 10px;
  margin-top: 40px;
}
.login-text{
  font-size:14px;
  line-height:10px;
  cursor: pointer;
}
.login-text:hover{
  text-decoration: underline;
}
</style>

<template>
  <div>
    <div class="expert-register">
      <el-form ref="form" :model="form" label-width="80px" :rules="formRule">
        <el-form-item label="姓名" prop="username">
          <el-input
              maxlength="10"
              show-word-limit
              v-model="form.username"
              class="name-input"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="简介" prop="introduction">
          <el-input
              type="textarea"
              show-word-limit
              v-model="form.introduction"
              maxlength="200"
              :autosize="{ minRows: 4}"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpertRegister",
  data(){
    return {
      form: {
        username: '',
        introduction: '',
        videoCoverPath: '',
        videoPart: '',
        videoDesc: '',
        uploaderID: 0,
        videoUpTime: '',
      },
      //表单规则
      formRule: {
        username:[
          {required: true, message:"请输入姓名", trigger: 'blur'}
        ],
        introduction:[
          {required: true, message:"请输入简介", trigger: 'blur'}
        ],
        videoCoverPath:[
          {required: true, message:"您还没有上传封面哦~", trigger: 'blur'}
        ],
        videoDesc:[
          {required: true, message:"请为您的视频添加简介吧", trigger: 'blur'}
        ],
        videoPart:[
          {required: true, message:"请选择分区", trigger: 'blur'}
        ],
      }
    }
  }
}
</script>

<style scoped>
.expert-register{
  width: 1200px;
  margin: 0 auto;
}
</style>

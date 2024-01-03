<template>
  <div class="box-display">
    <div class="person-box">
      <el-popover placement="bottom"
                  width="200"
                  trigger="click">
        <p>{{intro}}</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="visible = false">取消</el-button>
          <el-button type="primary" size="mini" @click="visible = false">咨询</el-button>
        </div>
        <div class="person-card" slot="reference">
          <img src="@/assets/hcm.png" alt="img">
          <span style="margin-top: 5px;">胡春明</span>
        </div>
      </el-popover>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      visible: false,
      intro: '粉嫩小雪，寂寞学生妹，求求哥哥来草窝'
    };
  }
}
</script>

<style scoped>
.box-display {
  display: flex;
  justify-content: center;
  /*align-items: center;*/
  height: 100vh;
  width: 50vw;
}
.person-box {
  position: center;
  display: flex;

}
.person-box:hover{
  cursor: pointer;
}
.person-card {
  display: flex;
  flex-direction: column;
  width: 10vw;
}
</style>
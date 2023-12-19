<template>
  <div class="chat-view">
    <div class="left-box">
111111
    </div>
    <div class="right-box">
222222222
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatView"
}
</script>

<style scoped>
.chat-view{
  width: 100%;
  border: red 1px solid;
  display: flex;
  flex-direction: row;
}
.left-box{
  width: 30%;
  border-right: black 1px solid;
}
.right-box{
  width: 70%;
}
</style>

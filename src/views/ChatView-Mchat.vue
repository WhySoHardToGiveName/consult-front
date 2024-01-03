<template>
  <div class="chat-box">
  <m-chat
      ref="mChat"
      :messages="messages"
      @submit="submit"
      :loadMore="loadMore"
      height="100vh"
  >
  </m-chat></div>
</template>

<script>
import MChat from "@maybecode/m-chat";

export default {
  name: "ChatView-MChat",
  components: {
    MChat
  },
  data() {
    return {
      messages: [
        {
          id: 0, // 唯一id
          name: "", // 姓名
          avatar: "", // 头像地址
          self: false, // 是否是自己
          content: {
            text: "123", // 文本
            duration: "", // 时长
            imageUrl: "", // 图片地址
            videoUrl: "", // 视频地址
            audioUrl: "", // 音频地址
            fileUrl: "", // 文件地址
            fileName: "", // 文件名称
            fileSize: "", // 文件大小
            filExt: "", // 文件扩展名
          },
          type: "text", // 文件类型:text|image|audio|video,
          isBack: false,  // 控制该消息是否已经撤回,
          time: '15:47' // 发送时间
        },
        {
          id: 1, // 唯一id
          name: "", // 姓名
          avatar: "", // 头像地址
          self: false, // 是否是自己
          content: {
            text: "123", // 文本
            duration: "", // 时长
            imageUrl: "", // 图片地址
            videoUrl: "", // 视频地址
            audioUrl: "", // 音频地址
            fileUrl: "", // 文件地址
            fileName: "", // 文件名称
            fileSize: "", // 文件大小
            filExt: "", // 文件扩展名
          },
          type: "text", // 文件类型:text|image|audio|video,
          isBack: false,  // 控制该消息是否已经撤回,
          time: '15:48' // 发送时间
        },
        {
          id: 2, // 唯一id
          name: "", // 姓名
          avatar: "", // 头像地址
          self: false, // 是否是自己
          content: {
            text: "123", // 文本
            duration: "", // 时长
            imageUrl: "", // 图片地址
            videoUrl: "", // 视频地址
            audioUrl: "", // 音频地址
            fileUrl: "", // 文件地址
            fileName: "", // 文件名称
            fileSize: "", // 文件大小
            filExt: "", // 文件扩展名
          },
          type: "text", // 文件类型:text|image|audio|video,
          isBack: false,  // 控制该消息是否已经撤回,
          time: '15:49' // 发送时间
        }
      ]
    }
  }
}
</script>

<style scoped>
.chat-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
}
</style>

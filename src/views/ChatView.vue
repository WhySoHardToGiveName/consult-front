<template>
  <div>
    <beautiful-chat
        class="chat-box"
        :participants="participants"
        :titleImageUrl="titleImageUrl"
        :onMessageWasSent="onMessageWasSent"
        :messageList="messageList"
        :newMessagesCount="newMessagesCount"
        :isOpen="isChatOpen"
        :close="closeChat"
        :icons="icons"
        :open="openChat"
        :showEmoji="true"
        :showFile="true"
        :showEdition="false"
        :showDeletion="false"
        :showTypingIndicator="showTypingIndicator"
        :showLauncher="false"
        :showCloseButton="false"
        :showHeader="true"
        :disableUserListToggle="true"
        :colors="colors"
        :alwaysScrollToBottom="alwaysScrollToBottom"
        :messageStyling="messageStyling"
        @onType="handleOnType"
        @edit="editMessage"
    />
  </div>
</template>
<script>
import CloseIcon from "@/assets/hcm.png";
import OpenIcon from "@/assets/hcm.png";
import FileIcon from "@/assets/logo.png";
import CloseIconSvg from "@/assets/logo.png";
import io from "socket.io-client";
export default {
  name: "app",
  data() {
    return {
      // 创建一个 socket 对象
      socket: null,
      icons: {
        open: {
          img: OpenIcon,
          name: "default",
        },
        close: {
          img: CloseIcon,
          name: "default",
        },
        file: {
          img: FileIcon,
          name: "default",
        },
        closeSvg: {
          img: CloseIconSvg,
          name: "default",
        },
      },
      participants: [
        {
          id: "user1",
          name: "Matteo",
          imageUrl:
              "https://avatars3.githubusercontent.com/u/1915989?s=230&v=4",
        },
        {
          id: "user2",
          name: "Support",
          imageUrl:
              "https://avatars3.githubusercontent.com/u/37018832?s=200&v=4",
        },
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl:
          "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
      messageList: [
        { type: "text", author: `me`, data: { text: `Say yes!` } },
        { type: "text", author: `user1`, data: { text: `No.` } },
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: true, // to determine whether the chat window should be open or closed
      showTypingIndicator: "", // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: "#4e8cff",
          text: "#ffffff",
        },
        launcher: {
          bg: "#4e8cff",
        },
        messageList: {
          bg: "#ffffff",
        },
        sentMessage: {
          bg: "#4e8cff",
          text: "#ffffff",
        },
        receivedMessage: {
          bg: "#eaeaea",
          text: "#222222",
        },
        userInput: {
          bg: "#f4f7f9",
          text: "#565867",
        },
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true, // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    };
  },
  created() {
    // 建立服务器的连接
    console.log("连接");
    this.socket = io("http://toutiao.itheima.net", {
      query: {
        token: "8d6b045d-a15f-4d4a-9841-340ddf27a283",
      },
      transports: ["websocket"],
    });
    console.log("socket", this.socket);
    // 收消息
    this.socket.on("message", (data) => {
      console.log("收到消息", data);
      // 将内容添加到聊天列表中
      const item = {
        type: "text",
        author: `user1`,
        data: { text: `${data.msg}` },
      };
      this.messageList.push(item);
      // this.chatList.push({
      //   isme: false,
      //   t: data.msg,
      // });
      // 自动滚动到底部
      // this.$nextTick(() => {
      //   // 滚动到最后面
      //   this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
      // });
    });
  },
  methods: {
    sendMessage(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen
            ? this.newMessagesCount
            : this.newMessagesCount + 1;
        this.onMessageWasSent({
          author: "support",
          type: "text",
          data: { text },
        });
      }
    },
    // 发送消息
    onMessageWasSent(message) {
      // called when the user sends a message
      console.log("限制性这个", message);
      this.messageList = [...this.messageList, message];
      // 将消息发送到服务器
      this.socket.emit("message", {
        msg: message.data.text,
        timestamp: Date.now(),
      });
      console.log("发送到服务器");
    },
    openChat() {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true;
      this.newMessagesCount = 0;
    },
    closeChat() {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false;
    },
    handleScrollToTop() {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
    },
    handleOnType() {
      console.log("Emit typing event");
    },
    editMessage(message) {
      const m = this.messageList.find((m) => m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    },
  },
};
</script>

<style scoped>
.chat-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
}

</style>
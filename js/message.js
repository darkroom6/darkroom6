const chatModule = (() => {
  function appendMessage(msg, chatDelay = 100) {
    if (!msg) return;
    msg.name = msg.name || "ms" + +new Date();
    const chatMessageList = document.querySelector('#chat_list .chat-message-list');
    const msgname = "." + msg.name;
    const msginner = ".messageinner-" + msg.name;
    const chatListItem = document.createElement('li');
    chatListItem.className = "message-" + msg.align + " " + msg.name;
    const messageInnerDiv = document.createElement('div');
    messageInnerDiv.className = "messageinner-" + msg.name;
    const messageContent = "<span class='message-text'>" + msg.msg + "</span>";
    messageInnerDiv.innerHTML = messageContent;
    chatListItem.appendChild(messageInnerDiv);
    chatMessageList.appendChild(chatListItem);

    setTimeout(function () {
      document.querySelector(msgname).classList.add('fade-in');
      onRowAdded();
    }, chatDelay);

    setTimeout(function () {
      document.querySelector(msginner).classList.add('fade-in');
      onRowAdded();
    }, chatDelay + msg.delay + 10);
  }

  function handleKeyUp(event) {
    if (event.keyCode === 13) {
      sendMyChat();
    } else if (event.ctrlKey) {
      if (event.code === "KeyM") {
        setTimeout(() => {
          document.querySelector('#typing').classList.remove('hidden')
        }, 100);

        const msg = chatMessages.shift();
        setTimeout(() => {
          appendMessage(msg);
          document.querySelector('#typing').classList.add('hidden');
        }, msg.typing ? 2000 : 100);
      }
    }
  }

  function sendMyChat() {
    appendMessage({
      msg: document.getElementById('chat_input').value,
      delay: 100,
      align: "right"
    });
    document.getElementById('chat_input').value = '';
  }

  function onRowAdded() {
    const chatContainer = document.querySelector('#chat_list .chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  function showChatWindow() {
    document.getElementById('notification_container').classList.remove('show');
    document.getElementById('chat_window').classList.add('show');
    document.getElementById('be_btn').classList.add('active')
  }

  function hideChatWindow(onlyWindow) {
    return () => {
      if (!onlyWindow) {
        const messageContent = "Có tin nhắn mới của Beboy";
        showNoti(messageContent);
        document.getElementById('notification_container').classList.add('show');
      }
      document.getElementById('chat_window').classList.remove('show');
      document.getElementById('be_btn').classList.remove('active')
    }
  }

  function showNoti(messageContent) {
    const noti = document.createElement('div');
    noti.className = "CTinNhNMICABeboy text-center text-white text-2xl font-medium leading-[33.60px]";
    noti.textContent = messageContent;
    document.getElementById('notification_container').appendChild(noti);
  }

  function loadDefaultMsg(chatMessagesDefault) {
    chatMessagesDefault?.forEach((msg, i) => {
      appendMessage(msg, 110 + (i * 110));
    });
  }

  function ChatModule(chatMessagesDefault, chatMessages, notiContent) {
    this.chatMessagesDefault = chatMessagesDefault || [];
    this.chatMessages = chatMessages || [];
    this.notiContent = notiContent || "";
  }

  ChatModule.prototype.initialize = function () {
    const self = this;

    document.addEventListener('DOMContentLoaded', () => {
      loadDefaultMsg(self.chatMessagesDefault);
      document.getElementById('chat_input').addEventListener('keyup', handleKeyUp);
      document.getElementById('send_chat').addEventListener('click', sendMyChat);
      document.getElementById('notification_container').addEventListener('click', showChatWindow);
      document.getElementById('be_btn').addEventListener('click', showChatWindow);
      document.getElementById('close_chat_window').addEventListener('click', hideChatWindow(1));
      showNoti(self.notiContent);
      setTimeout(() => hideChatWindow(0), 1000);
    });
  };

  return ChatModule;
})();

export default chatModule;

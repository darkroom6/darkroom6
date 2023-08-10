const ChatModule = (function () {
  let instance;
  function init(chatMessagesDefault, chatMessages, notiContent) {
    let chatModule = {
      chatMessagesDefault,
      chatMessages,
      notiContent
    };


    chatModule.appendMessage = function (msg, chatDelay = 100) {
      if (!msg) return;
      msg.name = msg.name || "ms" + +new Date();
      const chatMessageList = document.querySelector('#chat_list .chat-message-list');
      const msgname = "." + msg.name;
      const msginner = ".messageinner-" + msg.name;
      const chatListItem = document.createElement('li');
      chatListItem.className = "message-" + msg.align + " " + msg.name + (msg.icon ? ' icon' : '');
      const messageInnerDiv = document.createElement('div');
      messageInnerDiv.className = "messageinner-" + msg.name;
      const messageContent = "<span class='message-text'>" + msg.msg + "</span>";
      messageInnerDiv.innerHTML = messageContent;
      chatListItem.appendChild(messageInnerDiv);
      chatMessageList.appendChild(chatListItem);

      setTimeout(function () {
        document.querySelector(msgname).classList.add('fade-in');
        chatModule.onRowAdded();
      }, chatDelay);

      setTimeout(function () {
        document.querySelector(msginner).classList.add('fade-in');
        chatModule.onRowAdded();
      }, chatDelay + msg.delay + 10);
    };

    chatModule.handleKeyUp = function (event) {
      if (event.keyCode === 13) {
        chatModule.sendMyChat();
      } else if (event.ctrlKey) {
        if (event.code === "KeyM") {
          document.querySelector('#typing').classList.remove('hidden');

          const msg = chatModule.chatMessages.shift();
          setTimeout(() => {
            chatModule.appendMessage(msg);
            document.querySelector('#typing').classList.add('hidden');
          }, msg?.typing ? 2000 : 100);

        } else if (event.code === "KeyN") {
          chatModule.showNoti(chatModule.notiContent[1], 'nd');
        }
      }
    };

    chatModule.sendMyChat = function () {
      chatModule.appendMessage({
        msg: document.getElementById('chat_input').value,
        delay: 100,
        align: "right"
      });
      document.getElementById('chat_input').value = '';
    };

    chatModule.onRowAdded = function () {
      const chatContainer = document.querySelector('#chat_list .chat-container');
      chatContainer.scrollTop = chatContainer.scrollHeight;
    };

    chatModule.showChatWindow = function () {
      document.getElementById('notification_container').classList.remove('show');
      document.getElementById('chat_window').classList.add('show');
      document.getElementById('be_btn').classList.add('active');
    };

    chatModule.hideChatWindow = function (onlyWindow) {
      return function () {
        if (!onlyWindow) {
          chatModule.showNoti(chatModule.notiContent[0]);
          document.getElementById('notification_container').classList.add('show');
        }
        document.getElementById('chat_window').classList.remove('show');
        document.getElementById('be_btn').classList.remove('active');
      };
    };

    chatModule.showNoti = function (notiContent, clsName) {
      const noti = document.createElement('div');
      noti.className = "CTinNhNMICABeboy text-center text-white text-2xl font-medium leading-[33.60px]";
      noti.innerText = notiContent;
      document.getElementById('notification_container').innerHTML = '';
      document.getElementById('notification_container').appendChild(noti);
      document.getElementById('notification_container').classList.add('show', clsName);
      if (clsName) {
        setTimeout(() => {
          document.getElementById('notification_container').classList.remove('show');
        }, 5e3);
      }
    };

    chatModule.loadDefaultMsg = function () {
      chatModule.chatMessagesDefault?.forEach((msg, i) => {
        chatModule.appendMessage(msg, 110 + (i * 110));
      });
    };

    chatModule.onLoad = function () {
      chatModule.loadDefaultMsg();
      // Add event listener to the document for keyup events
      document.getElementById('chat_input').addEventListener('keyup', function (event) {
        chatModule.handleKeyUp(event);
      });
      // Add event listener to the document for keyup events
      document.getElementById('send_chat').addEventListener('click', function () {
        chatModule.sendMyChat();
      });
      //
      document.getElementById('notification_container').addEventListener('click', function () {
        chatModule.showChatWindow();
      });
      //
      document.getElementById('be_btn').addEventListener('click', function () {
        chatModule.showChatWindow();
      });
      //
      document.getElementById('close_chat_window').addEventListener('click', function () {
        chatModule.hideChatWindow(1)();
      });
      //
      setTimeout(function () {
        chatModule.hideChatWindow(0)();
      }, 1000);
    }
    return chatModule;
  }

  return {
    getInstance: function (chatMessagesDefault, chatMessages, notiContent) {
      if (!instance) {
        instance = init(chatMessagesDefault, chatMessages, notiContent);
      }
      return instance;
    }
  };
})();
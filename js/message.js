window._q = (q) => document.querySelector(q);

const ChatModule = (function () {
  let instance;
  function init({ chatMessagesDefault, chatMessages, notiContent, chatTo }) {
    let chatModule = {
      chatMessagesDefault,
      chatMessages,
      notiContent,
      chatTo
    };


    chatModule.appendMessage = function (msg, chatDelay = 100) {
      if (!msg) return;
      msg.name = msg.name || "ms" + +new Date();
      const chatMessageList = _q('#chat_list .chat-message-list');
      const msgname = "." + msg.name;
      const msginner = ".messageinner-" + msg.name;
      const chatListItem = document.createElement('li');
      chatListItem.className = "message-" + (msg.align || 'left') + " " + msg.name + (msg.icon ? ' icon' : '');
      const messageInnerDiv = document.createElement('div');
      messageInnerDiv.className = "messageinner-" + msg.name;
      const messageContent = "<span class='message-text'>" + msg.msg + "</span>";
      messageInnerDiv.innerHTML = messageContent;
      chatListItem.appendChild(messageInnerDiv);
      chatMessageList.appendChild(chatListItem);

      setTimeout(function () {
        _q(msgname).classList.add('fade-in');
        chatModule.onRowAdded();
      }, chatDelay);

      setTimeout(function () {
        _q(msginner).classList.add('fade-in');
        chatModule.onRowAdded();
      }, chatDelay + (msg.delay || 100) + 10);
    };

    chatModule.handleKeyUp = function (event) {
      if (event.keyCode === 13) {
        chatModule.sendMyChat();
      } else if (event.keyCode === 40) {
        chatModule.showNextChat();
      } else if (event.ctrlKey) {
        if (event.code === "KeyM") {
          chatModule.showNextChat();
        } else if (event.code === "KeyN") {
          chatModule.showNoti(chatModule.notiContent[1], 'nd');
        }
      }
    };
    chatModule.showNextChat = () => {
      _q('#typing').classList.remove('hidden');
      const msg = chatModule.chatMessages.shift();
      setTimeout(() => {
        chatModule.appendMessage(msg);
        _q('#typing').classList.add('hidden');
      }, msg?.typing ? 2000 : 100);

    }

    chatModule.sendMyChat = () => {
      chatModule.appendMessage({
        msg: _q('#chat_input').value,
        delay: 100,
        align: "right"
      });
      _q('#chat_input').value = '';
    };

    chatModule.onRowAdded = () => {
      const chatContainer = _q('#chat_list .chat-container');
      chatContainer.scrollTop = chatContainer.scrollHeight;
    };

    chatModule.showChatWindow = () => {
      _q('#notification_container').classList.remove('show');
      _q('#chat_window').classList.add('show');
      _q('#be_btn').classList.add('active');
      _q('#chat_input').focus();

    };

    chatModule.hideChatWindow = function (onlyWindow) {
      return function () {
        if (!onlyWindow) {
          chatModule.showNoti(chatModule.notiContent[0]);
          _q('#notification_container').classList.add('show');
        }
        _q('#chat_window').classList.remove('show');
        _q('#be_btn').classList.remove('active');
      };
    };

    chatModule.showNoti = function (notiContent, clsName) {
      const noti = document.createElement('div');
      noti.className = "CTinNhNMICABeboy text-center text-white text-2xl font-medium leading-[33.60px]";
      noti.innerText = notiContent;
      _q('#notification_container').innerHTML = '';
      _q('#notification_container').appendChild(noti);
      _q('#notification_container').classList.add('show', clsName);
      if (clsName) {
        setTimeout(() => {
          _q('#notification_container').classList.remove('show');
        }, 5e3);
      }
    };

    chatModule.loadDefaultMsg = () => {
      // 1
      chatModule.chatMessagesDefault?.forEach((msg, i) => {
        chatModule.appendMessage(msg, 110 + (i * 110));
      });
      // 2 
      if (chatModule.chatTo) {
        _q('#chat_to').innerText = chatModule.chatTo;
      }
    };

    chatModule.onLoad = () => {
      chatModule.loadDefaultMsg();
      // Add event listener to the document for keyup events
      _q('#chat_input').addEventListener('keyup', function (event) {
        chatModule.handleKeyUp(event);
      });
      // Add event listener to the document for keyup events
      _q('#send_chat').addEventListener('click', function () {
        chatModule.sendMyChat();
      });
      //
      _q('#notification_container').addEventListener('click', function () {
        chatModule.showChatWindow();
      });
      //
      _q('#be_btn').addEventListener('click', function () {
        chatModule.showChatWindow();
      });
      //
      _q('#close_chat_window').addEventListener('click', function () {
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
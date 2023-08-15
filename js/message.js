window._q = (q) => document.querySelector(q);

const ChatModule = (function () {
  let instance;
  function init({ chatMessagesDefault, chatMessages, notiContent, chatTo }) {
    let _chat = {
      chatMessagesDefault,
      chatMessages,
      notiContent,
      chatTo
    };


    _chat.appendMessage = function (msg, chatDelay = 100) {
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
        _chat.onRowAdded();
      }, chatDelay);

      setTimeout(function () {
        _q(msginner).classList.add('fade-in');
        _chat.onRowAdded();
      }, chatDelay + (msg.delay || 100) + 10);
    };

    _chat.handleKeyUp = function (event) {
      if (event.keyCode === 13) {
        _chat.sendMyChat();
      } else if (event.keyCode === 40) {
        _chat.showNextChat();
      } else if (event.ctrlKey) {
        if (event.code === "KeyM") {
          _chat.showNextChat();
        } else if (event.code === "KeyN") {
          _chat.showNoti(_chat.notiContent[1], 'nd');
        }
      }
    };
    _chat.showNextChat = () => {
      _q('#typing').classList.remove('hidden');
      const msg = _chat.chatMessages.shift();
      setTimeout(() => {
        _chat.appendMessage(msg);
        _q('#typing').classList.add('hidden');
      }, msg?.typing ? 2000 : 100);

    }

    _chat.sendMyChat = () => {
      _chat.appendMessage({
        msg: _q('#chat_input').value,
        delay: 100,
        align: "right"
      });
      _q('#chat_input').value = '';
    };

    _chat.onRowAdded = () => {
      const chatContainer = _q('#chat_list .chat-container');
      chatContainer.scrollTop = chatContainer.scrollHeight;
    };

    _chat.showChatWindow = () => {
      _q('#notification_container').classList.remove('show');
      _q('#chat_window').classList.add('show');
      _q(_chat.activeSender).classList.add('active');
      _q('#chat_input').focus();

    };

    _chat.showChatWindow = function () {
      _q('#chat_window').classList.add('show');
      _q('#be_btn').classList.add('active');
    };

    _chat.hideChatWindow = function () {
      _q('#chat_window').classList.remove('show');
      _q('#be_btn').classList.remove('active');
    };

    _chat.showDefaultNoti = () => {
      _chat.showNoti(_chat.notiContent[0]);
      _q('#notification_container').classList.add('show');
    }

    _chat.hideDefaultNoti = () => {
      _q('#notification_container').classList.remove('show');
    }

    _chat.showNoti = function (notiContent, clsName) {
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

    _chat.loadDefaultMsg = () => {
      // 1
      _chat.chatMessagesDefault?.forEach((msg, i) => {
        _chat.appendMessage(msg, 110 + (i * 110));
      });
      // 2 
      if (_chat.chatTo) {
        _q('#chat_to').innerText = _chat.chatTo;
      }
    };

    _chat.eventListener = () => {
      // Add event listener to the document for keyup events
      _q('#chat_input').addEventListener('keyup', function (event) {
        _chat.handleKeyUp(event);
      });
      // Add event listener to the document for keyup events
      _q('#send_chat').addEventListener('click', function () {
        _chat.sendMyChat();
      });
      //
      _q('#notification_container').addEventListener('click', function () {
        _chat.showChatWindow();
      });
      //
      _q('#be_btn').addEventListener('click', function () {
        _chat.showChatWindow();
      });
      //
      _q('#close_chat_window').addEventListener('click', function () {
        _chat.hideChatWindow();
      });
    }

    _chat.onLoad = () => {
      _chat.loadDefaultMsg();
      //
      _chat.eventListener();
      //
      if (_chat.showChatBox) {
        _chat.showChatWindow();
        _chat.hideDefaultNoti();
      } else {
        setTimeout(function () {
          _chat.hideChatWindow();
          _chat.showDefaultNoti();
        }, 500);
      }
    }
    return _chat;
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
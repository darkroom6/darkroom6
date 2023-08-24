window._q = (q) => document.querySelector(q);
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ChatModule = (function () {
  let instance;
  function init(input) {
    let _chat = input;


    _chat.appendMessage = function (msg, chatDelay = 100) {
      if (!msg) return;
      msg.name = msg.name || "ms" + +new Date();
      const chatMessageList = _q('#chat_list .chat-message-list');
      const msgname = "." + msg.name;
      const msginner = ".messageinner-" + msg.name;
      const chatListItem = document.createElement('li');
      chatListItem.className = [
        "message-" + (msg.align || 'left'),
        msg.name,
        msg.icon ? 'icon' : '',
        msg.class2nd || _chat.activeSender.replace('#', '') || '',
      ].join(' ');
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
        } else if (event.code === "KeyG") {
          _chat.showNotification(_chat.notifications[1], 'top');
        } else if (event.code === "KeyB") {
          _chat.showNotification(_chat.notifications[0], 'top');
        }
      }
    };
    _chat.showNextChat = () => {
      _q('#typing').classList.remove('hidden');
      const msg = _chat.chatMessages.shift();
      setTimeout(() => {
        _chat.appendMessage(msg);
        _q('#typing').classList.add('hidden');
      }, msg?.typing ? getRandomNumber(500, 2000) : 100);

    }

    _chat.sendMyChat = () => {
      if (_q('#chat_input').value) {
        _chat.appendMessage({
          msg: _q('#chat_input').value,
          delay: 100,
          align: "right"
        });
        _q('#chat_input').value = '';
      }
      _q('#chat_input').focus();
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
      _q('ul.chat-message-list').setAttribute('class-2nd', _chat.activeSender.replace('#', ''));
    };

    _chat.hideChatWindow = function () {
      _q('#chat_window').classList.remove('show');
      _q(_chat.activeSender).classList.remove('active');
    };

    _chat.showDefaultNoti = () => {
      if (_chat.notifications[0].isDefault) {
        _chat.showNotification(_chat.notifications[0]);
        _q('#notification_container').classList.add('show');
      }
    }

    _chat.hideDefaultNoti = () => {
      _q('#notification_container').classList.remove('show');
    }

    _chat.showNotification = function (notifications, clsName) {
      const noti = document.createElement('div');
      noti.className = "CTinNhNMICABeboy text-center text-white text-2xl font-medium leading-[33.60px]";
      //
      noti.innerText = notifications.content;
      //
      if (notifications.msgCount) {
        const msgCount = document.createElement('span');
        msgCount.innerText = notifications.msgCount;
      _q(notifications.activeSender).appendChild(msgCount);
      }
      //
      _q('#notification_container').setAttribute('nd', JSON.stringify(notifications));
      _q('#notification_container').innerHTML = '';
      _q('#notification_container').appendChild(noti);
      _q('#notification_container').classList.add('show', clsName);
      if (clsName) {
        clearTimeout(_chat.timeOutNoti)
        _chat.timeOutNoti = setTimeout(() => {
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

    _chat.notificationClick = () => {
      if (_q('#notification_container').classList.contains('top')) {
        _chat.hideChatWindow();
        const noti = JSON.parse(_q('#notification_container').getAttribute('nd'));
        _q('#chat_to').innerText = noti.chatTo;
        _q(_chat.activeSender).removeEventListener('click', _chat.showChatWindow);
        _chat.activeSender = noti.activeSender;
        _q(_chat.activeSender).addEventListener('click', _chat.showChatWindow);
        _q('ul.chat-message-list').setAttribute('class-2nd', noti.activeSender.replace('#', ''));
        setTimeout(() => {
          _chat.showChatWindow();
        }, 150);
      } else {
        _chat.showChatWindow();
      }
    }

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
      _q('#notification_container').addEventListener('click', _chat.notificationClick);
      //
      _q(_chat.activeSender).addEventListener('click', function () {
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
    getInstance: function (chatMessagesDefault, chatMessages, notifications) {
      if (!instance) {
        instance = init(chatMessagesDefault, chatMessages, notifications);
      }
      return instance;
    }
  };
})();
const chatMessagesDefault = [
  {
    delay: 100, align: 'left',
    msg: "GS nhận được hàng rồi"
  },
  {
    delay: 100, align: 'left',
    msg: "Nhưng"
  },
  {
    delay: 100, align: 'left',
    msg: "Đừng có gặp riêng người của tôi nữa!"
  },
  {
    delay: 100, align: 'left',
    msg: "Không là tôi huỷ kèo đó!"
  }
];

let chatMessages =
  [{
    delay: 100, align: 'left',
    msg: 'Phí môi giới của tôi tăng theo phí của V', typing: true
  },
  {
    delay: 100, align: 'left',
    msg: 'Tôi cũng muốn có phần của tôi hôm nay'
  },
  {
    delay: 100, align: 'left',
    msg: 'Không, phần của tôi phải có đêm nay'
  },
  {
    delay: 100, align: 'left',
    msg: 'Lần này tôi cần tiền mặt'
  },
  {
    delay: 100, align: 'left',
    msg: 'Đâu rồi?'
  },
  {
    delay: 100, align: 'left',
    msg: 'Khi nào tôi có tiền?'
  },
  {
    delay: 100, align: 'left',
    msg: 'Không'
  },
  {
    delay: 100, align: 'left',
    msg: 'Tôi cần tiền mặt'
  },
  {
    delay: 100, align: 'left',
    msg: 'Gấp!'
  }];




var chatDelay = 100;

// Function to append messages to ChatWindows
function appendMessage(msg) {
  if (!msg) return;
  msg.name = "ms" + +new Date();
  var chatMessageList = document.querySelector('#chat_list .chat-message-list');
  var msgname = "." + msg.name;
  var msginner = ".messageinner-" + msg.name;
  var spinner = ".sp-" + msg.name;

  var chatListItem = document.createElement('li');
  chatListItem.className = "message-" + msg.align + " " + msg.name;
  chatListItem.style.display = 'none';

  var messageInnerDiv = document.createElement('div');
  messageInnerDiv.className = "messageinner-" + msg.name;
  messageInnerDiv.style.display = 'none';
  var messageContent = "<span class='message-text'>" + msg.msg + "</span>";
  messageInnerDiv.innerHTML = messageContent;

  chatListItem.appendChild(messageInnerDiv);
  chatMessageList.appendChild(chatListItem);

  debounce(function () {
    var msgElement = document.querySelector(msgname);
    msgElement.style.display = 'block';
  }, chatDelay)();

  debounce(function () {
    var msgInnerElement = document.querySelector(msginner);
    msgInnerElement.style.display = 'block';
  }, chatDelay + msg.delay + 10)();

  debounce(onRowAdded, chatDelay);
  debounce(onRowAdded, chatDelay + msg.delay + 10)();
}

// Function to handle keyup events globally
function handleKeyUp(event) {
  if (event.keyCode === 13) {
    sendMyChat();
  } else if (event.ctrlKey) {
    if (event.code === "KeyM") {
      debounce(() => {
        document.querySelector('#typing').classList.remove('hidden')
      }, 100)();

      debounce(() => {
        appendMessage(chatMessages.shift());
        document.querySelector('#typing').classList.add('hidden');
      }, msg.typing ? 2000 : 100)();
    }
  }
}

// Function to handle keyup events globally
function sendMyChat() {
  appendMessage({
    msg: document.getElementById('chat_input').value,
    delay: 100,
    align: "right"
  });
  document.getElementById('chat_input').value = '';
}


function onRowAdded() {
  var chatContainer = document.querySelector('#chat_list .chat-container');
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Debounce function to introduce delay
function debounce(func, delay) {
  let timerId;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(func, delay);
  };
}

function showChatWindow() {
  document.getElementById('NotificationNewMessFromBeboy').classList.remove('show');
  document.getElementById('chat_window').classList.add('show');
  document.getElementById('be_btn').classList.add('active')
}

function hideChatWindow(onlyWindow) {
  return () => {
    if (!onlyWindow)
      document.getElementById('NotificationNewMessFromBeboy').classList.add('show');
    document.getElementById('chat_window').classList.remove('show');
    document.getElementById('be_btn').classList.remove('active')

  }
}
function loadDefaultMsg() {
  chatMessagesDefault?.forEach(msg => {
    appendMessage(msg);
  });
}
// Wait for the document to be fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', () => {
  loadDefaultMsg();
  // Add event listener to the document for keyup events
  document.getElementById('chat_input').addEventListener('keyup', handleKeyUp);
  // Add event listener to the document for keyup events
  document.getElementById('send_chat').addEventListener('click', sendMyChat);
  //
  document.getElementById('NotificationNewMessFromBeboy').addEventListener('click', showChatWindow);
  //
  document.getElementById('be_btn').addEventListener('click', showChatWindow);
  //
  document.getElementById('close_chat_window').addEventListener('click', hideChatWindow(1));
  //
  setTimeout(hideChatWindow(0), 1000);
});
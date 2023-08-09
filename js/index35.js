const chatMessagesDefault = [
  {
    name: 'ms1',
    delay: 300, align: 'left',
    msg: "GS nhận được hàng rồi"
  },
  {
    name: 'ms12',
    delay: 300, align: 'left',
    msg: "Nhưng"
  },
  {
    name: 'ms13',
    delay: 300, align: 'left',
    msg: "Đừng có gặp riêng người của tôi nữa!"
  },
  {
    name: 'ms14',
    delay: 300, align: 'left',
    msg: "Không là tôi huỷ kèo đó!"
  }
];

let chatMessages = [{
  delay: 300, align: 'left',
  msg: 'Phí môi giới của tôi tăng theo phí của V', typing: true
},
{
  delay: 300, align: 'left',
  msg: 'Tôi cũng muốn có phần của tôi hôm nay'
},
{
  delay: 300, align: 'left',
  msg: 'Không, phần của tôi phải có đêm nay'
},
{
  delay: 300, align: 'left',
  msg: 'Lần này tôi cần tiền mặt'
},
{
  delay: 300, align: 'left',
  msg: 'Đâu rồi?'
},
{
  delay: 300, align: 'left',
  msg: 'Khi nào tôi có tiền?'
},
{
  delay: 300, align: 'left',
  msg: 'Không'
},
{
  delay: 300, align: 'left',
  msg: 'Tôi cần tiền mặt'
},
{
  delay: 300, align: 'left',
  msg: 'Gấp!'
}];

/////////////////
/////////////////
/////////////////
// Function to append messages to ChatWindows
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

// Function to handle keyup events globally
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
  chatMessagesDefault?.forEach((msg, i) => {
    appendMessage(msg, 110 + (i * 110));
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
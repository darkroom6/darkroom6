let dataChat = [
  { s: 'guest', m: 'Tiền của tôi đâu?' }
]

// Debounce function to introduce delay
function debounce(func, delay) {
  let timerId;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(func, delay);
  };
}

// Function to append messages to ChatWindows
function appendMessage(message, messageType) {
  if (!message) {
    return;
  }
  const chatWindow = document.querySelector('#chat_list');

  if (messageType === 'mine') {
    const myMessage = document.createElement('div');
    myMessage.className =
      'ChatItem MyMessage h-[60px] pr-[30px] rounded-tl-[15px] rounded-tr-[15px] rounded-bl-[15px] border border-black border-opacity-50 justify-start items-center inline-flex';
    myMessage.innerHTML = `<div class="text-white text-base font-medium">${message}</div>`;
    chatWindow.appendChild(myMessage);
    setTimeout(() => {
      myMessage.classList.add('show');
    }, 200);
  } else if (messageType === 'guest') {
    const guestMessage = document.createElement('div');
    guestMessage.className =
      'ChatItem GuestMessage h-[60px] rounded-tr-[15px] rounded-bl-[15px] rounded-br-[15px] border border-black border-opacity-60 justify-center items-center inline-flex';
    guestMessage.innerHTML = `<div class="text-white text-base font-medium">${message}</div>`;
    chatWindow.appendChild(guestMessage);
    setTimeout(() => {
      guestMessage.classList.add('show');
    }, 200);
  }
  scrollToEnd();
}

// Function to handle keyup events globally
function handleKeyUp(event) {
  if (event.keyCode === 39) { // add chat guest
    debounce(() => {
      document.querySelector('#typing').classList.remove('hidden')
    }, 100)();

    debounce(() => {
      appendMessage(dataChat.shift().m, 'guest');
      document.querySelector('#typing').classList.add('hidden');
    }, 200)();
  }
}

// Function to handle keyup events globally
function sendMyChat() {
  appendMessage(document.getElementById('chat_input').value, 'mine');
  document.getElementById('chat_input').value = '';
}

// Function to handle keyup events globally
function sendMyChatEnter(event) {
  if (event.keyCode === 13) {
    sendMyChat();
  }
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

function scrollToEnd() {
  const scrollableElement = document.getElementById('chat_list');
  scrollableElement.scrollTop = scrollableElement.scrollHeight;
}

// Wait for the document to be fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', () => {
  console.log('done load');
  // Add event listener to the document for keyup events
  document.addEventListener('keyup', handleKeyUp);
  // Add event listener to the document for keyup events
  document.getElementById('send_chat').addEventListener('click', sendMyChat);
  //
  document.getElementById('chat_input').addEventListener('keyup', sendMyChatEnter);
  //
  document.getElementById('NotificationNewMessFromBeboy').addEventListener('click', showChatWindow);

  document.getElementById('be_btn').addEventListener('click', showChatWindow);
  //
  document.getElementById('close_chat_window').addEventListener('click', hideChatWindow(1));
  //
  setTimeout(hideChatWindow(0), 1000);
});
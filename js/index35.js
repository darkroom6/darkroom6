let dataChat = [
  { s: 'guest', m: 'Phí môi giới của tôi tăng theo phí của V', typing: true },
  { s: 'guest', m: 'Tôi cũng muốn có phần của tôi hôm nay' },
  { s: 'guest', m: 'Không, phần của tôi phải có đêm nay' },
  { s: 'guest', m: 'Lần này tôi cần tiền mặt' },
  { s: 'guest', m: 'Đâu rồi?' },
  { s: 'guest', m: 'Khi nào tôi có tiền?' },
  { s: 'guest', m: 'Không' },
  { s: 'guest', m: 'Tôi cần tiền mặt' },
  { s: 'guest', m: 'Gấp!' },
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
  } else if (messageType === 'guest') {
    const guestMessage = document.createElement('div');
    guestMessage.className =
      'ChatItem GuestMessage h-[60px] rounded-tr-[15px] rounded-bl-[15px] rounded-br-[15px] border border-black border-opacity-60 justify-center items-center inline-flex';
    guestMessage.innerHTML = `<div class="text-white text-base font-medium">${message}</div>`;
    chatWindow.appendChild(guestMessage);
  }
  scrollToEnd();
}

// Function to handle keyup events globally
function handleKeyUp(event) {

  if (event.keyCode === 39) { // add chat guest
    const msg = dataChat.shift();
    debounce(() => {
      document.querySelector('#typing').classList.remove('hidden')
    }, 100)();

    debounce(() => {
      appendMessage(msg.m, 'guest');
      document.querySelector('#typing').classList.add('hidden');
    }, msg.typing ? 2000 : 100)();


    // } else if (event.keyCode === 46 || event.keyCode === 8) {// delete
    //   dataChat = [
    //     { s: 'guest', m: 'Tiền của tôi đâu?' },
    //   ]
    //   // Empty the ChatWindows
    //   document.querySelector('#chat_list').innerHTML = '';
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

  document.getElementById('chat_input').addEventListener('keyup', sendMyChatEnter);
});
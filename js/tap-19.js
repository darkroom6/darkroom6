const chatMessagesDefault = [
  {
    name: 'ms1',
    delay: 100, msg: 'Hey, tôi cần thêm 20 triệu', class2nd: 'be_chat'
  },
  {
    name: 'ms2',
    delay: 100, msg: 'Gấp!', class2nd: 'be_chat'
  }
];

let chatMessages = [
];

const notifications = [{
  content: "Có tin nhắn mới của Beboy",
  chatTo: "Beboy",
  activeSender: '#be_chat',
  msgCount: 1
}, {
  content: "GS Trọng is online",
  chatTo: "GS Trọng",
  activeSender: '#gs_chat'
}];

const chatModule = ChatModule.getInstance({
  chatMessagesDefault,
  chatMessages,
  notifications,
  activeSender: '#gs_chat'
});
// Wait for the document to be fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', chatModule.onLoad);

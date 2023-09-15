const chatMessagesDefault = [
  {
    name: 'ms1',
    msg: "B, anh đang ở đâu rồi?"
  }
];

let chatMessages = [
  {
    delay: 100,
    msg: 'Ok',
  },
  {
    delay: 100,
    msg: 'Rồi',
  },
  {
    msg: "Tụi nó đi rồi",
    delay: 100
  }
];

const notifications = [{
  isDefault: 1,
  content: "Có tin nhắn mới của Tuấn",
  chatTo: "Tuấn",
  activeSender: '#tuan_chat',
  msgCount: 1
}];

const chatModule = ChatModule.getInstance({
  chatMessagesDefault,
  chatMessages,
  notifications,
  activeSender: '#tuan_chat'
});
// Wait for the document to be fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', chatModule.onLoad);

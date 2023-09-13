const chatMessagesDefault = [
 
];

let chatMessages = [
   {
    name: 'ms1',
    delay: 100, msg: 'Ok',
  },
  {
    name: 'ms2',
    delay: 100, msg: 'Rồi',
  }
];

const notifications = [{
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

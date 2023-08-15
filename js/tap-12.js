const chatMessagesDefault = [];

let chatMessages = [
  { msg: "Nội dung tôi làm chưa xong.", typing: 1 },
  { msg: "?" },
  { msg: "OK" },
  { msg: "OK" }

];


const chatModule = ChatModule.getInstance({
  chatMessagesDefault,
  chatMessages,
  notiContent: [],
  showChatBox: true,
  chatTo: "GS Trọng",
  activeSender: '#gs_btn'
});
// Wait for the document to be fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', chatModule.onLoad);
const chatMessagesDefault = [];

let chatMessages = [
  { msg: "Ai theo dõi?", typing: true },
  { msg: "Thanh đến chưa?", typing: true },
  { msg: "Khi nào có thể cho Hoàng liều tiếp theo được?" },
  { msg: "Vì lần mất kiểm soát vừa rồi?" },
  { msg: "Dấu hiệu gì?" }
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
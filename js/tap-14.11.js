const chatMessagesDefault = [];

let chatMessages = [
  { msg: "Ai theo dõi?", typing: true },
  { msg: "Thanh đến chưa?", typing: true },
  { msg: "Khi nào có thể cho Hoàng liều tiếp theo được?", typing: 1 },
  { msg: "Vì lần mất kiểm soát vừa rồi?" },
  { msg: "Dấu hiệu gì?" },
  { msg: "OK" },
  { msg: "Để thử với Thanh trước", typing: 1 },
  { msg: "Với Hoàng sau" },
  { msg: "Một sự đột phá trong Tâm Thức" }
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
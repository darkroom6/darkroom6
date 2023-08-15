const chatMessagesDefault = [];

let chatMessages = [
  { msg: "Ngoại giao. Tôi nhờ bạn của chúng ta trong này xạc giúp", typing: 1 },
  { msg: "Tôi cũng nghĩ vậy. Nhưng ta đâu có được quyết định.", typing: 1 },
  { msg: "chuyện" },
  { msg: "Không đổi máy, không tiếp cận Hoàng.", typing: 1 },
  { msg: "Nó có biết nghe lén, xem lén được những cuộc nói này của ta không?", typing: 1 },
  { msg: "Nhưng anh vẫn biết nó đi đâu làm gì?" }
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
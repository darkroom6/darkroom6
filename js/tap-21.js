const chatMessagesDefault = [];

let chatMessages = [
  { msg: "Ngoại giao. Tôi nhờ bạn của chúng ta trong này xạc giúp", typing: 1 },
  { msg: "Tôi cũng nghĩ vậy. Nhưng ta đâu có được quyết định.", typing: 1 },
  { msg: "Nó có biết nghe lén, xem lén được những cuộc nói này của ta không?", typing: 1 },
  { msg: "Nhưng anh vẫn biết nó đi đâu làm gì?" },
  { msg: "Anh gom bằng cách nào?", typing: 1 },
  { msg: "Tiến hành kế hoạch đi! Thời gian chín muồi rồi.", typing: 1 },
  { msg: "Không trễ hơn được đâu! Vinh đã đánh hơi được rồi", typing: 1 }
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
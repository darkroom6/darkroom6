
const chatMessagesDefault = [{
  name: 'ms1',
  msg: "K + H 🚗🏠 ông K",
  delay: 100,
  align: "left"
}
];

let chatMessages = [{
  msg: "15",
  delay: 100,
  align: "left",
}, {
  msg: "💵",
  icon: 1,
  delay: 100,
  align: "left"
},
{
  msg: "Ok rồi.",
  delay: 100,
  align: "left"
},
{
  msg: "🙏",
  icon: 1,
  delay: 100,
  align: "left"
},
{
  msg: "Đang làm",
  delay: 100,
  align: "left"
},
];
const notiContent = ["Có tin nhắn mới của Beboy", "BeBoy muốn kết nối với bạn."];
const chatModule = ChatModule.getInstance(chatMessagesDefault, chatMessages, notiContent);
// Wait for the document to be fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', chatModule.onLoad);

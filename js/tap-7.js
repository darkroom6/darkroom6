
const chatMessagesDefault = [{
  name: 'ms1',
  msg: "K đang gặp H.",
  delay: 100,
  align: "left"
}, {
  name: 'ms12',
  msg: "K & H sẽ đến nhà ông Khê.",
  delay: 100,
  align: "left"
},
];

let chatMessages = [{
  msg: "Tiền của tôi đâu?",
  delay: 100,
  align: "left",
  typing: 1
}, {
  name: 'ms123',
  msg: "Ổn rồi đúng không?",
  delay: 100,
  align: "left"
},
{
  name: 'ms1234',
  msg: "Hoàng đã nghe file của anh",
  delay: 100,
  align: "left"
},
{
  name: 'ms12345',
  msg: "Anh cũng nghe được Hoàng",
  delay: 100,
  align: "left"
},
{
  name: 'ms12346',
  msg: "Không ai khác nghe được những điều này",
  delay: 100,
  align: "left"
}];
const notifications = [{
  content: "Có tin nhắn mới của Beboy",
  chatTo: "Beboy",
  activeSender: '#be_chat'
}];
const chatModule = ChatModule.getInstance({
  chatMessagesDefault,
  chatMessages,
  notifications,
  activeSender: '#be_chat'

});
// Wait for the document to be fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', chatModule.onLoad);

const chatMessagesDefault = [
  {
    name: 'ms1',
    msg: "GS nhận được hàng rồi"
  }, {
    name: 'ms12',
    msg: "Nhưng"
  }, {
    name: 'ms13',
    msg: "Đừng có gặp riêng người của tôi nữa!"
  }, {
    name: 'ms14',
    msg: "Không là tôi huỷ kèo đó!"
  }
];

let chatMessages = [
  { msg: 'Phí môi giới của tôi tăng theo phí của V', typing: true },
  { msg: 'Tôi cũng muốn có phần của tôi hôm nay' },
  { msg: 'Không, phần của tôi phải có đêm nay' },
  { msg: 'Lần này tôi cần tiền mặt' },
  { msg: 'Đâu rồi?' },
  { msg: 'Khi nào tôi có tiền?' },
  { msg: 'Không' },
  { msg: 'Tôi cần tiền mặt' },
  { msg: 'Gấp!' }
];

const notifications = [{
  content: "Có tin nhắn mới của Beboy",
  chatTo: "Beboy",
  activeSender: '#be_chat',
  isDefault:1
}, {
  content: "GS Trọng is online",
  chatTo: "GS Trọng",
  activeSender: '#gs_chat'
}];

const chatModule = ChatModule.getInstance({
  chatMessagesDefault,
  chatMessages,
  notifications,
  activeSender: '#be_chat'
});
// Wait for the document to be fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', chatModule.onLoad);
const chatMessagesDefault = [
  {
    name: 'ms1',
    delay: 100,
    align: 'left',
    msg: "Hi"
  }
];

let chatMessages = [{
  typing: true,
  msg: 'Muốn tôi tắt máy?'
}, {
  msg: 'Nếu hết pin thì sao? xạc',
}, {
  msg: "Đổi bằng cách nào?"
}, {
  typing: true,
  msg: "Tôi đang sửa lại nội dung trị liệu cho Hoàng"
}, {
  msg: "Khi nào có thể cho Hoàng liều trị liệu mới", typing: 1
}, {
  msg: "Ta đã tính trước trường hợp này mà?",
}, {
  msg: "Đúng rồi!"
}, {
  msg: "Phương án Giao - Ninh",
}, {
  msg: "OK"
}];

const notiContent = ["Có tin nhắn mới của GS Trọng"];

const chatModule = ChatModule.getInstance({
  chatMessagesDefault,
  chatMessages,
  notiContent,
  chatTo: "GS Trọng",
  activeSender: '#gs_btn'
});
// Wait for the document to be fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', chatModule.onLoad);
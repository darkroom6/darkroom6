const chatMessagesDefault = [
  {
    name: 'ms1',
    delay: 100,
    align: 'left',
    msg: "Hi"
  }
];

let chatMessages = [
  { typing: true, msg: 'Muốn tôi tắt máy?' },
  { msg: 'Nếu hết pin thì sao?', },
  { msg: 'Trong này không có chỗ cắm sạc.', },
  { msg: "Đổi bằng cách nào?" },
  { typing: true, msg: "Tôi đang sửa lại nội dung trị liệu cho Hoàng" },
  { msg: "Khi nào có thể cho Hoàng liều trị liệu mới", typing: 1 },
  { msg: "Ta đã tính trước trường hợp này mà?" },
  { msg: "Đúng rồi!" },
  { msg: "Phương án Giao - Ninh" },
  { msg: "Liều đầu tiên đã hoạt động tốt", typing: 1 },
  { msg: "Liều thứ 2 phải được dùng từ 5 đến 10 ngày sau liều đầu tiên", typing: 1 },
  { msg: "OK" }
];

const notifications = [{
  content: "Có tin nhắn mới của GS Trọng",
  chatTo: "GS Trọng",
  activeSender: '#gs_chat'
}];

const chatModule = ChatModule.getInstance({
  chatMessagesDefault,
  chatMessages,
  notifications,
  chatTo: "GS Trọng",
  activeSender: '#gs_chat'
});
// Wait for the document to be fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', chatModule.onLoad);
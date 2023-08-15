const chatMessagesDefault = [
  {
    name: 'ms1',
    delay: 300, align: 'left',
    msg: "GS nhận được hàng rồi"
  },
  {
    name: 'ms12',
    delay: 300, align: 'left',
    msg: "Nhưng"
  },
  {
    name: 'ms13',
    delay: 300, align: 'left',
    msg: "Đừng có gặp riêng người của tôi nữa!"
  },
  {
    name: 'ms14',
    delay: 300, align: 'left',
    msg: "Không là tôi huỷ kèo đó!"
  }
];

let chatMessages = [{
  delay: 300, align: 'left',
  msg: 'Phí môi giới của tôi tăng theo phí của V', typing: true
},
{
  delay: 300, align: 'left',
  msg: 'Tôi cũng muốn có phần của tôi hôm nay'
},
{
  delay: 300, align: 'left',
  msg: 'Không, phần của tôi phải có đêm nay'
},
{
  delay: 300, align: 'left',
  msg: 'Lần này tôi cần tiền mặt'
},
{
  delay: 300, align: 'left',
  msg: 'Đâu rồi?'
},
{
  delay: 300, align: 'left',
  msg: 'Khi nào tôi có tiền?'
},
{
  delay: 300, align: 'left',
  msg: 'Không'
},
{
  delay: 300, align: 'left',
  msg: 'Tôi cần tiền mặt'
},
{
  delay: 300, align: 'left',
  msg: 'Gấp!'
}];

const notiContent = ["Có tin nhắn mới của Beboy", "GS Trọng is online"];

const chatModule = ChatModule.getInstance({chatMessagesDefault, chatMessages, notiContent});
// Wait for the document to be fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', chatModule.onLoad);
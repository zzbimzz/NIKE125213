// text chay
let slideshowEl = document.querySelector(".container__banner");
let pr_textEl = document.querySelector(".container__banner-tinh");
let pr_textchidlEl = document.querySelectorAll(".container__banner-tinh-text"); // lưu trữ danh sách

var widthEl = pr_textEl.offsetWidth; // lữu trữ giá chị chiều rộng được lấy từ offsetwidth

setInterval(() => {
  // chạy vòng lặp
  if (pr_textEl.scrollLeft === (pr_textchidlEl.length - 1) * widthEl) {
    pr_textEl.insertAdjacentElement("beforeend", pr_textEl.firstElementChild);
    pr_textEl.scrollLeft = (pr_textchidlEl.length - 2) * widthEl; //quay lại vị trí để tiếp tục duyệt
  }
  pr_textEl.scrollBy({
    // chuyển sang phải
    left: widthEl, // giá trị = chiều rộng
    behavior: "smooth", // hiệu ứng mượt
  });
}, 2000);

// var list = document.getElementsByClassName(
//   "container__Nike-Athletic-img container__img"
// );
// var index = 0;
// for (x of list) {
//   x.style.display = "none";
// }
// list[index].style.display = "block";
// function showL() {
//   for (x of list) {
//     x.style.display = "none";
//   }
//   if (index == 0) index = list.length - 1;
//   else index = index - 1;
//   list[index].style.display = "block";
//   // setTimeout(showL, 2000);
// }

// function showR() {
//   for (x of list) {
//     x.style.display = "none";
//   }
//   if (index == list.length - 1) index = 0;
//   else index = index + 1;
//   list[index].style.display = "block";
// }

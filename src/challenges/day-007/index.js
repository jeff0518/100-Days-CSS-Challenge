// 搜尋功能
document.querySelector(".search-icon").addEventListener("click", function () {
  document.querySelector(".search-input").classList.toggle("active");
});

// 選單功能
document.querySelector(".menu-icon").addEventListener("click", function () {
  document.querySelector(".panel").classList.toggle("show-menu");
  document.querySelector(".menu").classList.toggle("active");
});

console.log("有執行嗎？");

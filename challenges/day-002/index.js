document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");

  // 確認元素存在才添加事件監聽器
  if (menuIcon) {
    menuIcon.addEventListener("click", function () {
      this.classList.toggle("active");

      const lines = this.querySelectorAll("div");
      lines.forEach((line) => {
        line.classList.remove("no-animation");
      });
    });
  } else {
    console.log("無法找到 .menu-icon 元素");
  }
});

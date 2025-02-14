import challengesConfig from "./config/config.js";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cards-container");

  if (container) {
    container.innerHTML = challengesConfig.challenges
      .map(
        (challenge) => `
        <div class="card">
          <div class="card-inner">
            <div class="box">
              <div class="imgBox">
                <img src="${challenge.image}" alt="${challenge.title}" />
              </div>
              <div class="icon">
                <a href="#" class="iconBox">
                  <span class="material-symbols-outlined">arrow_outward</span>
                </a>
              </div>
            </div>
            <div class="content">
              <h3>${challenge.title}</h3>
              <p>${challenge.description}</p>
            </div>
          </div>
        </div>
      `
      )
      .join("");
  } else {
    console.error("找不到 cards-container 元素");
  }
});

import { socialMediaData } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  const switchButton = document.getElementById("switch-btn");

  switchButton.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("white-mode");
    document.querySelector(".head-title").classList.toggle("white-title");
    document.querySelector(".mode").classList.toggle("white-title");
    document.querySelector(".head").classList.toggle("white-border");

    const cards = document.getElementsByClassName("cards");
    for (const card of cards) {
      card.classList.toggle("white-cards");
    }
  });
});

function setTitleHtml() {
  let titleHtml = "";

  titleHtml += `
  <div class="header-title">
    <div class="head">
      <h2 class="head-title">Social Media Dashboard</h2>
      <p class="subtitle">Total Followers: 23,004</p>
        </div>
        <div class="switch-mode">
          <p class="mode">Dark Mode</p>
          <label class="switch">
          <input  type="checkbox">
          <span id="switch-btn" class="slider round"></span>
          </label>
        </div>
    </div>
  `;

  return titleHtml;
}

function setFeedHtml() {
  let mediaHTML = "";

  socialMediaData.forEach((socialData) => {
    mediaHTML += `
    

    <div class="cards ${socialData.borderClass}">
    <div class="flex-group">
        <div class="social-tag">
        <div class="${socialData.icon}"> 
        <p class="social-name">${socialData.name}
        </p>
        </div>
        </div>
    </div>

      <h1 class="social-followers">
      ${socialData.followers}
      </h1>

      <p class="social-description">
      ${socialData.description}
      </p>

      <div class="statistics">
      <div class="icons ${socialData.followersChange}
        ${socialData.downArrow} ${socialData.upArrow}">
        </div>
        <p class="social-data ${socialData.downClass}">
        ${socialData.followersChange}
        </p>
      </div>
    </div>
    `;
  });

  return mediaHTML;
}

function renderMedia() {
  document.getElementById("feed").innerHTML = setFeedHtml();
  document.getElementById("title").innerHTML = setTitleHtml();
}

renderMedia();

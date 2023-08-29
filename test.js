import { socialMediaData } from "./data.js";
import { dataOverview } from "./data-overview.js";

document.addEventListener("DOMContentLoaded", function () {
  const switchButton = document.getElementById("switch-btn");

  switchButton.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("white-mode");
    document.querySelector(".head-title").classList.toggle("white-title");
    document.querySelector(".mode").classList.toggle("white-title");
    document.querySelector(".head").classList.toggle("white-border");

    document.querySelector(".overview-title").classList.toggle("white-title");

    const cards = document.getElementsByClassName("cards");
    for (const card of cards) {
      card.classList.toggle("white-cards");
    }

    const cardsFloor = document.getElementsByClassName("overview-flex");
    for (const cardFloor of cardsFloor) {
      cardFloor.classList.toggle("white-cards");
    }

    const statsStyle = document.getElementsByClassName("stats-style");
    for (const stats of statsStyle) {
      stats.classList.toggle("black");
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

function setOverview() {
  let overviewHtml = "";

  overviewHtml += `
  <div>
  <h2 class="overview-title">Overview - Today</h2>
  </div>
  `;
  return overviewHtml;
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

function overViewData() {
  let overViewData = "";

  dataOverview.forEach((overviewData) => {
    overViewData += `
    
    <div class="cards-tabel">
      <div class="overview-flex">
        <div clas="cards-data">
          <p class="overview-style">${overviewData.name}</p>
          <h2 class="stats-style">${overviewData.data}</h2>
        </div>
        <div class="cards-score">
        <div class="social-icons ${overviewData.icon}">
        </div>
        <div class="stats">
        <div class="stats-icons ${overviewData.arrow}">
        </div>
          <p class="stats-floor
          ${overviewData.downClass}">${overviewData.followersChange}</p>
        </div>
        </div>
      </div>
    </div>

    `;
  });

  return overViewData;
}

function renderMedia() {
  document.getElementById("feed").innerHTML = setFeedHtml();
  document.getElementById("title").innerHTML = setTitleHtml();
  document.getElementById("overview").innerHTML = setOverview();
  document.getElementById("overviewData").innerHTML = overViewData();
}

renderMedia();

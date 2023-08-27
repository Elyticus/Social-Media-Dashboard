import { socialMediaData } from "./data.js";

function setTitleHtml() {
  let titleHtml = "";

  titleHtml += `
  <div class="header-title">
    <div class="head">
      <h2>Social Media Dashboard</h2>
      <p class="subtitle">Total Followers: 23,004</p>
        </div>
        <div class="switch-mode">
          <p class="mode">Dark Mode</p>
          <label class="switch">
          <input type="checkbox" checked>
          <span class="slider round"></span>
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
    

    <div class="cards">
    <div class="flex-group">
      <img src="images/icon-facebook.svg" />
        <p class="social-name">
        ${socialData.name}
        </p>
    </div>

      <h1 class="social-followers">
      ${socialData.followers}
      </h1>

      <p class="social-description">
      ${socialData.description}
      </p>

      <div class="statistics">
      <img class="icon-up" 
      src="images/icon-up.svg" />
      <p class="social-data">
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

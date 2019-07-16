// import "../images/";

// css import sequence impact cancat css
import "../styles/reset.css";
import "../styles/index.scss";
import "../styles/p-load.scss";
import * as utils from "./utils";
import ProgressiveLoad from "./p-load";

// image need import from here
import "../images/large/avatar.jpg";
import "../images/large/new-home-page.jpg";
import "../images/large/full-page.jpg";
import "../images/large/react-native.jpg";
import "../images/large/ls-app.jpg";
import "../images/large/ls-web.jpg";
import "../images/large/yg-web.jpg";
import "../images/large/ticket.jpg";
import "../images/large/zhl-prod.jpg";
import "../images/large/zhl-web.jpg";

// progressive load image
new ProgressiveLoad();

document.addEventListener("DOMContentLoaded", () => {
  const headerEle: HTMLElement = utils.$("header");
  const headerHeight: number = headerEle.offsetHeight;
  const navAbout: HTMLElement = utils.$(".nav-about");
  const navProject: HTMLElement = utils.$(".nav-project");

  window.addEventListener("scroll", () => {
    console.log(window.scrollY, headerHeight, 2999);
    if (window.scrollY > headerHeight - 70) {
      utils.removeClass(navAbout, "nav-active");
      utils.addClass(navProject, "nav-active");
    } else {
      utils.addClass(navAbout, "nav-active");
      utils.removeClass(navProject, "nav-active");
    }
  });
});

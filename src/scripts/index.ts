// import "../images/";

// css import sequence impact cancat css
import "../styles/reset.css";
import "../styles/index.scss";
import "../styles/index-mobile.scss";
import "../styles/p-load.scss";
import * as utils from "./utils";
import ProgressiveLoad from "./p-load";

// progressive load image
new ProgressiveLoad({
  width: 300,
  height: 300
});

document.addEventListener("DOMContentLoaded", () => {
  // const $headerEle: HTMLElement = utils.$("header");
  const $bodyEle: HTMLElement = utils.$("body");
  // const $headerHeight: number = $headerEle.offsetHeight;
  const $navAbout: HTMLElement = utils.$(".nav-about");
  const $navProject: HTMLElement = utils.$(".nav-project");

  if (utils.isMobile()) {
    $bodyEle.setAttribute('id', 'mobileVersion')
  }

  window.addEventListener("load", () => {
    const projectTop: number = utils.getElementTop(utils.$("#project"));
    window.addEventListener("scroll", () => {
      console.log(window.scrollY, projectTop, 2999);
      if (window.scrollY > projectTop - 70) {
        utils.removeClass($navAbout, "nav-active");
        utils.addClass($navProject, "nav-active");
      } else {
        utils.addClass($navAbout, "nav-active");
        utils.removeClass($navProject, "nav-active");
      }
    });
  })
});

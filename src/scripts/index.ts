// import "../images/";

// css import sequence impact cancat css
import "../styles/reset.css";
import "../styles/index.scss";
import "../styles/progressive-load.scss";
import * as utils from "./utils";
import ProgressiveLoad from "./progressive-load";

// progressive load image
new ProgressiveLoad();

document.addEventListener("DOMContentLoaded", () => {
  const headerEle: HTMLElement = utils.$("header");
  const headerHeight: number = headerEle.offsetHeight;
  const navAbout:HTMLElement = utils.$('.nav-about')
  const navProject:HTMLElement = utils.$('.nav-project')

  window.addEventListener('scroll', () => {
    console.log(window.scrollY, headerHeight, 2999)
    if (window.scrollY > headerHeight - 70) {
      utils.removeClass(navAbout, "nav-active");
      utils.addClass(navProject, "nav-active")
    } else {
      utils.addClass(navAbout, "nav-active");
      utils.removeClass(navProject, "nav-active");
    }
  })
});

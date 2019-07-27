// css import sequence impact cancat css
import "../styles/reset.css";
import "../styles/index.scss";
import "../styles/index-mobile.scss";
import "../styles/gload.scss";
import * as utils from "./utils";
// @ts-ignore
import { GloadCSSBlur, GloadCanvas } from "gload";

if (utils.isMobile()) {
  new GloadCSSBlur();
} else {
  new GloadCanvas();
}

document.addEventListener("DOMContentLoaded", () => {
  // const $headerEle: HTMLElement = utils.$("header");
  // const $headerHeight: number = $headerEle.offsetHeight;
  const $navAbout: HTMLElement = utils.$(".nav-about");
  const $navProject: HTMLElement = utils.$(".nav-project");

  window.addEventListener("load", () => {
    const projectTop: number = utils.getElementTop(utils.$("#project"));
    window.addEventListener("scroll", () => {
      if (
        (window.scrollY || document.documentElement.scrollTop) >
        projectTop - 70
      ) {
        utils.removeClass($navAbout, "nav-active");
        utils.addClass($navProject, "nav-active");
      } else {
        utils.addClass($navAbout, "nav-active");
        utils.removeClass($navProject, "nav-active");
      }
    });
  });
});

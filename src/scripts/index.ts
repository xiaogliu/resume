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
  const $navAbout: HTMLElement = utils.$(".nav-about");
  const $navProject: HTMLElement = utils.$(".nav-project");

  window.addEventListener("load", () => {
    // monitor scroll and change nav style
    const projectTop: number = utils.getElementTop(utils.$("#project"));
    function scrollHandler(): void {
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
    }

    // add throttle
    const throttleScrollHandler = utils.throttle(scrollHandler, 200);
    window.addEventListener("scroll", throttleScrollHandler);
  });
});

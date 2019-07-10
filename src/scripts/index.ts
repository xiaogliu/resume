// import StackBlur from 'stackblur-canvas'
// import { $ } from './utils'
import "../styles/index.scss";
import "../styles/reset.css";

document.addEventListener("DOMContentLoaded", () => {
  const imageNodeList: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".image-container"
  );
  const imageContainer: HTMLElement[] = Array.prototype.slice.apply(
    imageNodeList
  );

  imageContainer.forEach(e => {
    const $small: HTMLImageElement = e.querySelector(".img-small");

    // 1: load small image and show it
    const img: HTMLImageElement = new Image();

    img.src = $small.src;
    img.onload = () => {
      $small.classList.add("loaded");
    };

    // 2: load large image
    const imgLarge: HTMLImageElement = new Image();
    imgLarge.src = e.dataset.large;
    imgLarge.onload = () => {
      imgLarge.classList.add("loaded");
    };
    e.appendChild(imgLarge);
  });
});

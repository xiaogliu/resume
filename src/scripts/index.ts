import * as StackBlur from "../../node_modules/stackblur-canvas/dist/stackblur-es.min.js";
import "../images/test.jpg";
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
    const $canvas: HTMLCanvasElement = e.querySelector("canvas");

    // 1: load small image and show it
    const img: HTMLImageElement = new Image();

    img.src = $small.src;
    img.onload = () => {
      $small.classList.add("loaded");
      console.log(StackBlur, $small, $canvas, 29999);
      StackBlur.image($small, $canvas, 70);
    };

    // 2: load large image
    // const imgLarge: HTMLImageElement = new Image();
    // imgLarge.src = e.dataset.large;
    // imgLarge.onload = () => {
    //   imgLarge.classList.add("loaded");
    // };
    // e.appendChild(imgLarge);
  });
});

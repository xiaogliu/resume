// import StackBlur from 'stackblur-canvas'
// import { $ } from './utils'
import "../styles/index.scss";
import "../styles/reset.css";

document.addEventListener("DOMContentLoaded", () => {
  const $placeholder: HTMLElement = document.querySelector(".placeholder");
  const $small: HTMLImageElement = document.querySelector(".img-small");

  // const small: HTMLElement = document.querySelector('.img-small')

  // 1: load small image and show it
  const img: HTMLImageElement = new Image();

  img.src = $small.src;
  img.onload = () => {
    $small.classList.add("loaded");
  };

  // 2: load large image
  const imgLarge: HTMLImageElement = new Image();
  imgLarge.src = $placeholder.dataset.large;
  imgLarge.onload = () => {
    imgLarge.classList.add("loaded");
  };
  $placeholder.appendChild(imgLarge);
});

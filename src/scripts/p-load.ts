/**
 * Progressive load image
 * 
 * @param { object } options init options
 * @return void
 * 
 * @date 2019-07-10
 * @author Xiaoguang Liu <vincexgliu@gmail.com>
 */

// StackBlur is an open source canvas gauss algorithm blur image
import * as StackBlur from "../../node_modules/stackblur-canvas/dist/stackblur-es.min.js";

interface IOptions {
  seletor?: string;
  width?: number;
  height?: number;
  radius?: number;
}

class ProgressiveLoad {
  private options: IOptions;
  private imgRatio: string;

  constructor(options?: IOptions) {
    const defaultOptions: IOptions = {
      seletor: ".p-load-image-container",
      width: 4,
      height: 3,
      radius: 30,
    };

    this.options = { ...defaultOptions, ...options };

    // distruct needn't state type, it's same with right object
    const { width, height } = this.options;
    this.imgRatio = ((height / width) * 100).toFixed(2);

    this.init();
  }

  private init() {
    document.addEventListener("DOMContentLoaded", () => {
      const imageNodeList: NodeListOf<HTMLElement> = document.querySelectorAll(
        this.options.seletor
      );
      const imageContainer: HTMLElement[] = Array.prototype.slice.apply(
        imageNodeList
      );

      // set each image progessive loading
      imageContainer.forEach(e => {
        const $small: HTMLImageElement = e.querySelector("img");
        // padding-bottom set placeholder, avoid reflow
        const addInnerHtml: string = `
          <div style="padding-bottom: ${this.imgRatio}%;"></div>
          <canvas></canvas>
        `;
        e.innerHTML = e.innerHTML + addInnerHtml;
        const $canvas: HTMLCanvasElement = e.querySelector("canvas");

        // when small image loaded handling it use canvas, this code just avoid small image not loaded
        // when canvas handle image
        const img: HTMLImageElement = new Image();
        img.src = $small.src;
        img.onload = () => {
          StackBlur.image($small, $canvas, this.options.radius);

          // let canvas fade in load
          $canvas.classList.add("loaded");
        };

        // load large image
        const imgLarge: HTMLImageElement = new Image();
        imgLarge.src = e.dataset.large;
        imgLarge.onload = () => {
          // img fade in load
          imgLarge.classList.add("loaded");
        };
        e.appendChild(imgLarge);
      });
    });
  }
}

export default ProgressiveLoad;

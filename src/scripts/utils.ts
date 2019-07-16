export const $ = <T>(selector: any, scope = document): T =>
  scope.querySelector(selector);

export function getElementTop(elt: HTMLElement) {
  let actualTop: number = elt.offsetTop;

  // need optimise any
  let currentElt: any = elt.offsetParent;

  while (currentElt !== null) {
    actualTop += currentElt.offsetTop;
    currentElt = currentElt.offsetParent;
  }

  return actualTop;
}

/**
 * add / remove class
 */
export function hasClass(elements: HTMLElement, cName: string) {
  // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断
  return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
}

export function removeClass(elements: HTMLElement, cName: string) {
  if (hasClass(elements, cName)) {
    // replace方法是替换
    elements.className = elements.className.replace(
      new RegExp("(\\s|^)" + cName + "(\\s|$)"),
      " "
    );
  }
}
export function addClass(elements: HTMLElement, cName: string) {
  if (!hasClass(elements, cName)) {
    elements.className += " " + cName;
  }
}

/**
 * 获取视图宽高，更好的兼容性
 */
export function getViewport() {
  if (document.compatMode === "BackCompat") {
    return {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    };
  }
  return {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  };
}

/**
 * 判断是否是手机
 */
export function isMobile() {
  if (
    navigator.userAgent.match(
      /Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile|Windows Phone/i
    )
  ) {
    return true;
  }
  return false;
}

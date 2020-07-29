export function addClass(elm, cls) {
  if (elm.classList) {
    elm.classList.add(cls);
  } else if (!hasClass(elm, cls)) {
    elm.setAttribute("class", elm.getAttribute("class") + " " + cls);
  }
}

export function removeClass(elm, cls) {
  if (elm.classList) {
    elm.classList.remove(cls);
  } else if (hasClass(elm, cls)) {
    elm.setAttribute("class", elm.getAttribute("class").replace(cls, " "));
  }
}

export function hasClass(elm, cls) {
  let className = elm.getAttribute("class") || ""; //非空判断
  return className.indexOf(cls) > -1;
}

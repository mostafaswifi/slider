let parent = document.querySelector(".slider-parent");
let time = parent.getAttribute("dataTimer");
let children = parent.children;

let i = 0;
let showPic = () => {
  children[i].classList.remove("show");
  i < children.length - 1 ? i++ : (i = 0);
  children[i].classList.add("show");
};

setInterval(showPic, time);

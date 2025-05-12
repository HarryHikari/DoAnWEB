/*let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function () {
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider();
};
function reloadSlider() {
  let check = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";
}*/


 const list = document.querySelector(".list");
 const items = document.querySelectorAll(".item");
 const prev = document.getElementById("prev");
 const next = document.getElementById("next");
 const dots = document.querySelectorAll(".dots li");

 let index = 0;
 const totalItems = items.length;

 function updateSlider() {
   const width = items[0].clientWidth;
   list.style.transform = `translateX(${-width * index}px)`;

   dots.forEach((dot) => dot.classList.remove("active"));
   if (dots[index]) dots[index].classList.add("active");
 }

 next.addEventListener("click", () => {
   index = (index + 1) % totalItems;
   updateSlider();
 });

 prev.addEventListener("click", () => {
   index = (index - 1 + totalItems) % totalItems;
   updateSlider();
 });

 dots.forEach((dot, dotIndex) => {
   dot.addEventListener("click", () => {
     index = dotIndex;
     updateSlider();
   });
 });

 setInterval(() => {
   index = (index + 1) % totalItems;
   updateSlider();
 }, 5000);
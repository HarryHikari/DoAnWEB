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



 function initGundamSlider({
   trackSelector = ".gundam_grid_slider",
   prevBtnSelector = ".slider-btn.prev",
   nextBtnSelector = ".slider-btn.next",
   visibleItems = 3,
   gap = 20,
 }) {
   const track = document.querySelector(trackSelector);
   const prevBtn = document.querySelector(prevBtnSelector);
   const nextBtn = document.querySelector(nextBtnSelector);

   if (!track || !prevBtn || !nextBtn) return;

   let index = 0;

   function getItemWidth() {
     const item = track.querySelector(".gundam_item_slider");
     return item.offsetWidth + gap;
   }

   function updateSlider() {
     const scrollX = index * getItemWidth();
     track.style.transform = `translateX(-${scrollX}px)`;
   }

   nextBtn.addEventListener("click", () => {
     const maxIndex = track.children.length - visibleItems;
     if (index < maxIndex) {
       index++;
       updateSlider();
     }
   });

   prevBtn.addEventListener("click", () => {
     if (index > 0) {
       index--;
       updateSlider();
     }
   });

   // Cập nhật khi resize
   window.addEventListener("resize", updateSlider);
 }

 // Khởi tạo khi DOM đã load
 document.addEventListener("DOMContentLoaded", () => {
   initGundamSlider({
     visibleItems: 3,
     gap: 20,
   });
 });
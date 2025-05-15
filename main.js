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
 }, 3000);

 
// Back to Top Button
document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

 
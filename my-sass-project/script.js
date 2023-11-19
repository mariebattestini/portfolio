let sliderImg = document.querySelector("#slider-img");

let images = [
  "./img/construction-1.webp",
  "./img/construction-2.webp",
  "./img/construction-3.webp",
];
let i = 0;
function slide() {
  sliderImg.src = images[i];

  i++;
  if (i === 3) {
    i = 0;
  }
}
setInterval(slide, 3000);
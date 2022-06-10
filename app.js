// Working with the scroll event:

let scrollPosition = 0;

window.addEventListener("scroll", (e) => {
  scrollPosition = window.scrollY;
});

// Progress bar change on scroll:

const statBar = document.getElementsByClassName("progressBar");

window.addEventListener("scroll", (e) => {
  let persentage = Math.floor(scrollPosition / 20);
  statBar[0].style.width = `${persentage}%`;
});

// "Scroll me" div must be hidden on scroll:

let scrollMe = document.getElementsByClassName("scrollMe");
window.addEventListener("scroll", (e) => {
  scrollMe[0].classList.add("animateScrollMe");
});
console.log(scrollMe[0].classList);

// Flowers animations:

const flower01 = document.getElementsByClassName("smallFlower01");
const flower02 = document.getElementsByClassName("smallFlower02");
const flower03 = document.getElementsByClassName("smallFlower03");
const flower04 = document.getElementsByClassName("smallFlower04");
const flower05 = document.getElementsByClassName("smallFlower05");

window.addEventListener("scroll", changeColorsFlowers);

function changeColorsFlowers() {
  let persentage = Math.floor(scrollPosition / 20);
  // console.log(flower01[0].classList);

  // First flower:

  if (
    persentage >= 1 &&
    !flower01[0].classList.contains("flowerChangeColorOut")
  ) {
    flower01[0].classList.add("flowerChangeColorIn");
  }

  if (
    persentage >= 1 &&
    flower01[0].classList.contains("flowerChangeColorOut")
  ) {
    flower01[0].classList.remove("flowerChangeColorOut");
    flower01[0].classList.add("flowerChangeColorIn");
  }

  if (
    persentage <= 3 &&
    flower01[0].classList.contains("flowerChangeColorIn")
  ) {
    flower01[0].classList.remove("flowerChangeColorIn");
    flower01[0].classList.add("flowerChangeColorOut");
  }

  // Second flower:

  if (
    persentage >= 20 &&
    !flower02[0].classList.contains("flowerChangeColorOut")
  ) {
    flower02[0].classList.add("flowerChangeColorIn");
  }

  if (
    persentage >= 20 &&
    flower02[0].classList.contains("flowerChangeColorOut")
  ) {
    flower02[0].classList.remove("flowerChangeColorOut");
    flower02[0].classList.add("flowerChangeColorIn");
  }

  if (
    persentage <= 25 &&
    flower02[0].classList.contains("flowerChangeColorIn")
  ) {
    flower02[0].classList.remove("flowerChangeColorIn");
    flower02[0].classList.add("flowerChangeColorOut");
  }

  // Third flower:

  if (
    persentage >= 45 &&
    !flower03[0].classList.contains("flowerChangeColorOut")
  ) {
    flower03[0].classList.add("flowerChangeColorIn");
  }

  if (
    persentage >= 45 &&
    flower03[0].classList.contains("flowerChangeColorOut")
  ) {
    flower03[0].classList.remove("flowerChangeColorOut");
    flower03[0].classList.add("flowerChangeColorIn");
  }

  if (
    persentage <= 50 &&
    flower03[0].classList.contains("flowerChangeColorIn")
  ) {
    flower03[0].classList.remove("flowerChangeColorIn");
    flower03[0].classList.add("flowerChangeColorOut");
  }

  // Fourth flower:

  if (
    persentage >= 70 &&
    !flower04[0].classList.contains("flowerChangeColorOut")
  ) {
    flower04[0].classList.add("flowerChangeColorIn");
  }

  if (
    persentage >= 2 + 70 &&
    flower04[0].classList.contains("flowerChangeColorOut")
  ) {
    flower04[0].classList.remove("flowerChangeColorOut");
    flower04[0].classList.add("flowerChangeColorIn");
  }

  if (
    persentage <= 75 &&
    flower04[0].classList.contains("flowerChangeColorIn")
  ) {
    flower04[0].classList.remove("flowerChangeColorIn");
    flower04[0].classList.add("flowerChangeColorOut");
  }

  // Fifth flower:

  if (
    persentage >= 95 &&
    !flower05[0].classList.contains("flowerChangeColorOut")
  ) {
    flower05[0].classList.add("flowerChangeColorIn");
  }

  if (
    persentage >= 95 &&
    flower05[0].classList.contains("flowerChangeColorOut")
  ) {
    flower05[0].classList.remove("flowerChangeColorOut");
    flower05[0].classList.add("flowerChangeColorIn");
  }

  if (
    persentage <= 100 &&
    flower05[0].classList.contains("flowerChangeColorIn")
  ) {
    flower05[0].classList.remove("flowerChangeColorIn");
    flower05[0].classList.add("flowerChangeColorOut");
  }
}

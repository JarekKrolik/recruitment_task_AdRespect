const magnifyingGlass = document.querySelector(".magnifying-glass");
const searchForm = document.querySelector("form.d-flex");
const dropDownMenuElements = document.getElementsByClassName("dropdown-item");
const heroButtons = document.querySelectorAll(".hero-block__button");
const heroText = document.querySelector(".hero-block__text");
const heroPicture = document.querySelector(".hero-block__picture");
let heroSliderTimer = setInterval(heroSlider, 5000);
let animationDelay = 0;
magnifyingGlass.addEventListener("click", () => {
  searchForm.classList.toggle("on");
});
function heroSlider() {
  clearInterval(heroSliderTimer);
  heroText.classList.toggle("left");
  heroText.classList.toggle("right");
  heroPicture.classList.toggle("left");
  heroPicture.classList.toggle("right");
  heroSliderTimer = setInterval(heroSlider, 8000);
}
const dropDownMenuDelayHandler = () => {
  animationDelay = 0;
  for (let i = 0; i < dropDownMenuElements.length; i++) {
    animationDelay += 0.2;
    dropDownMenuElements[i].setAttribute(
      "style",
      `animation-delay:${animationDelay}s`
    );
  }
};

dropDownMenuDelayHandler();

heroButtons.forEach((e) => {
  e.addEventListener("click", heroSlider);
});

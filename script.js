const magnifyingGlass = document.querySelector(".magnifying-glass");
const searchForm = document.querySelector("form.d-flex");
const dropDownMenuElements = document.getElementsByClassName("dropdown-item");
let animationDelay = 0;
magnifyingGlass.addEventListener("click", () => {
  searchForm.classList.toggle("on");
});

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

const magnifyingGlass = document.querySelector(".magnifying-glass");
const searchForm = document.querySelector("form.d-flex");
const dropDownMenuElements = document.getElementsByClassName("dropdown-item");
const heroButtons = document.querySelectorAll(".hero-block__button");
const heroText = document.querySelector(".hero-block__text");
const heroPicture = document.querySelector(".hero-block__picture");
const fogOffButton = document.querySelector(".projects__fog-button");
const fogOnButton = document.querySelector(".projects-button");
const fogItems = document.querySelectorAll(".fog");
const projectsGallery = document.querySelector(".projects__pictures");
const projectAllPictures = document.querySelectorAll(".projects__picture");
const carousel = document.querySelector(".carousel");
const carouselOffBtn = document.querySelector(".carousel__exit-btn");
const currentYearDisplay = document.querySelector(".current-year");
let animationDelay = 0;
AOS.init();
magnifyingGlass.addEventListener("click", () => {
  searchForm.classList.toggle("on");
});

const macyInstance = Macy({
  container: ".projects__pictures",
  mobileFirst: "true",
  columns: 1,
  breakAt: {
    400: 2,
    1200: 3,
  },
  margin: {
    x: 30,
    y: 30,
  },
});

const fogOffHandler = () => {
  fogItems.forEach((e) => {
    e.classList.toggle("fog-off");
  });
};
const projectsPicturesPopUpHandler = (e) => {
  if (!fogOnButton.classList.contains("fog-off")) {
    fogOffHandler();
  }
  const chosenPicture = e.target.id;
  const picturesInCarousel = document.querySelectorAll(".carousel-item");
  picturesInCarousel.forEach((e) => {
    e.classList.remove("active");
    if (e.id === chosenPicture) {
      e.classList.add("active");
    }
  });
  projectsGallery.classList.toggle("pictures-off");
  carousel.classList.toggle("pictures-off");
  fogOnButton.classList.toggle("fog-off");
};

function heroSlider() {
  heroText.classList.toggle("left");
  heroText.classList.toggle("right");
  heroPicture.classList.toggle("left");
  heroPicture.classList.toggle("right");
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
const currentYearDisplayHandler = () => {
  currentYearDisplay.textContent = new Date().getFullYear();
};
currentYearDisplayHandler();
dropDownMenuDelayHandler();
projectAllPictures.forEach((e) => {
  e.addEventListener("click", projectsPicturesPopUpHandler);
});
fogOffButton.addEventListener("click", fogOffHandler);
fogOnButton.addEventListener("click", fogOffHandler);
carouselOffBtn.addEventListener("click", projectsPicturesPopUpHandler);
heroButtons.forEach((e) => {
  e.addEventListener("click", heroSlider);
});

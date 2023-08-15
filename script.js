const magnifyingGlass = document.querySelector(".magnifying-glass");
const searchForm = document.querySelector("form.d-flex");
magnifyingGlass.addEventListener("click", () => {
  searchForm.classList.toggle("on");
});

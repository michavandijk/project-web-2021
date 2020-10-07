const prevButton = document.querySelector("header nav img:first-of-type");
const nextButton = document.querySelector("header nav img:last-of-type");
const ul = document.querySelector("header nav ul");

function goToNextItem() {
  ul.scroll({
    left: ul.scrollLeft + 120, // scroll 120px to the left
    behavior: "smooth", // make sure it is a smooth scroll
  });
}

function goToPrevItem() {
  ul.scroll({
    left: ul.scrollLeft - 120, // scroll 120px to the right
    behavior: "smooth", // make sure it is a smooth scroll
  });
}

if (prevButton) {

prevButton.addEventListener("click", goToPrevItem);
nextButton.addEventListener("click", goToNextItem);
}
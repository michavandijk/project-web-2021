// NAVIGATION SCROLL FUNCTION

// variables needed for the scroll function
const prevButton = document.querySelector("header nav img:first-of-type");
const nextButton = document.querySelector("header nav img:last-of-type");
const ul = document.querySelector("header nav ul");

function goToNextItem() { // create function to go to the next items
  ul.scroll({ // the scroll method of the Element interface scrolls the element to a particular set of coordinates inside a given element
    left: ul.scrollLeft + 120, // scroll 120px to the left
    behavior: "smooth", // make sure it is a smooth scroll
  });
}

function goToPrevItem() { // create function to go to the previous items
  ul.scroll({ // the scroll method of the Element interface scrolls the element to a particular set of coordinates inside a given element
    left: ul.scrollLeft - 120, // scroll 120px to the right
    behavior: "smooth", // make sure it is a smooth scroll
  });
}

if (prevButton) { // only call this line when 'prevButton' is available
prevButton.addEventListener("click", goToPrevItem);
nextButton.addEventListener("click", goToNextItem);
}
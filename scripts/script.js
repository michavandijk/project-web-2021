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


// CLAPS ANIMATION

const clapsContainer = document.querySelector('.clap-container');
const clickCounter = document.querySelector('.click-counter');
const userClapsCounter = clickCounter.querySelector('.counter');
const totalClapsCounter = document.querySelector('.total-counter');
const particlesContainer = document.querySelector('.particles-container');
let userClaps = 0;
let totalClaps = 69;

clapsContainer.addEventListener('click', function () {
  clapsContainer.classList.add('has-clapped');

  if (!clickCounter.classList.contains('is-animating')) {  // if clickCounter does NOT (!) contain class 'animateInOut' then call function
    increaseUserClaps();
    increaseTotalClaps();

    animateClickCounter();
  }

  animateParticlesContainer();
})

function animateClickCounter() {
  clickCounter.classList.add('is-animating');

  setTimeout(function() {
    clickCounter.classList.remove('is-animating');
  }, 3010);
}

function increaseUserClaps () {
  userClaps++;
  userClapsCounter.innerHTML = '+' + userClaps;
}

function increaseTotalClaps () {
  totalClaps++;
  totalClapsCounter.innerHTML = totalClaps;
}

function animateParticlesContainer() {
  particlesContainer.style.transform = 'rotate(' + Math.floor(Math.random() * (72 - 1  + 1)) + 1 + 'deg)';
  particlesContainer.classList.add('is-animating');

  setTimeout(function() {
    particlesContainer.classList.remove('is-animating');
  }, 1000);
}
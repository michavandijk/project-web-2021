// NAVIGATION SCROLL FUNCTION

// static variables needed for the scroll function
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

// static variables needed for the on click events
const clapsContainer = document.querySelector('.claps');
const clickCounter = document.querySelector('.click-counter');
const userClapsCounter = clickCounter.querySelector('.counter');
const totalClapsCounter = document.querySelector('.total-counter');
const particlesContainer = document.querySelector('.particles-container');

// dynamic variables needed for the on click events
let userClaps = 0;
let totalClaps = 69;


clapsContainer.addEventListener('click', function () {
  // clapsContainer.classList.add('has-clapped'); // the function add the class '.has-clapped' to the clapsContainer

  if (!clickCounter.classList.contains('is-animating')) {  // if clickCounter does NOT (!) contain class 'animateInOut' then call function
    increaseUserClaps(); // call this function
    increaseTotalClaps(); // call this function

    animateClickCounter(); // call this function
  }

  animateParticlesContainer(); // call this function
})

function animateClickCounter() {
  clickCounter.classList.add('is-animating'); // call this function to start the CSS keyframes

  setTimeout(function() {
    clickCounter.classList.remove('is-animating'); // when the animation is over delete '.is-animating' class to let the user start the animation again
  }, 3000);
}

function increaseUserClaps () {
  userClaps++; // increase userClaps by 1
  userClapsCounter.innerHTML = '+' + userClaps; // edit the HTML, adds a '+'-icon and sets the 'new' userClaps
}

function increaseTotalClaps () {
  totalClaps++; // increase totalClaps by 1
  totalClapsCounter.innerHTML = totalClaps; // edit the HTML, sets the 'new' totalClaps
}

function animateParticlesContainer() {
  particlesContainer.style.transform = 'rotate(' + Math.floor(Math.random() * (72 + 1)) + 'deg)'; // calculate a random rotation max 72 and min 1 deg
  particlesContainer.classList.add('is-animating'); // add a class, so the CSS and JS know an animation is in progress

  setTimeout(function() {
    particlesContainer.classList.remove('is-animating'); // when the animation is over delete '.is-animating' class to let the user start the animation again
  }, 1000);
}
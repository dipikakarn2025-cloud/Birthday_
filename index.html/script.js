// Get elements
const song = document.getElementById("birthdaySong");
const startBtn = document.getElementById("startBtn");
const slideshow = document.querySelector(".slideshow");
const intro = document.getElementById("intro");

// Slideshow images
const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg"
];

let index = 0;

// Button click event
startBtn.addEventListener("click", () => {
  // Remove intro text and button
  intro.remove();

  // Start slideshow
  startSlideshow();

  // Play birthday song
  song.play();

  // Start balloons
  createBalloons();
});

// Slideshow function
function startSlideshow() {
  slideshow.classList.add("active");
  slideshow.style.backgroundImage = `url(${images[index]})`;

  setInterval(() => {
    slideshow.style.opacity = 0;

    setTimeout(() => {
      index = (index + 1) % images.length;
      slideshow.style.backgroundImage = `url(${images[index]})`;
      slideshow.style.opacity = 1;
    }, 700);

  }, 4000);
}

// Balloon animation
function createBalloons() {
  for (let i = 0; i < 30; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";

    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = 6 + Math.random() * 5 + "s";
    balloon.style.background = `hsl(${Math.random() * 360}, 70%, 70%)`;

    document.body.appendChild(balloon);

    setTimeout(() => {
      balloon.remove();
    }, 12000);
  }
}

// Get the button element
var darkModeToggle = document.getElementById("dark-mode-toggle");

// Add a click event listener to the button
darkModeToggle.addEventListener("click", function () {
  // Get the body element
  var body = document.getElementsByTagName("body")[0];

  // Toggle the dark-mode class on the body element
  body.classList.toggle("dark-mode");
});

// Define the Search button element
const searchBtn = document.querySelector(".btn");

// Add click event listener to the toggle button
darkModeToggle.addEventListener("click", function () {
  // Toggle the "btn-outline-warning" and "btn-outline-dark" classes on the search button element
  searchBtn.classList.toggle("btn-outline-dark");
  searchBtn.classList.toggle("btn-outline-warning");
});

// Define an array of image sources
const images = ["profile.png", "profile2.png"];

// Get the image element
const img = document.querySelector(".img");

// Initialize the counter
let counter = 0;

// Add a click event listener to the dark btn element
darkModeToggle.addEventListener("click", function () {
  // Increment the counter
  counter++;

  // Check if the counter exceeds the number of images in the array
  if (counter >= images.length) {
    // Reset the counter to 0
    counter = 0;
  }

  // Set the new image source
  img.src = images[counter];
});

// Get a reference to the services container element
var services = document.querySelector(".services");

// Define an array of objects representing the data for each card
var cardsData = [
  {
    imageSrc: "WORDS.jpg",
    title: "WORDS",
    text: "Khaled is very good translator",
    buttonLabel: "See his refrence",
    buttonLink: "#",
  },
  {
    imageSrc: "andovar.png",
    title: "Andovar",
    text: "Khaled is the most quicker and accrute translator I have work with",
    buttonLabel: "See his refrence",
    buttonLink: "#",
  },
  {
    imageSrc: "TransTec.png",
    title: "TrensTrec",
    text: "Some quick example text for Card 3.",
    buttonLabel: "See his refrence",
    buttonLink: "#",
  },
];

var cardsHtml = "";

for (let i = 0; i < 3; i++) {
  // Create the card HTML code and add it to the cardsHtml variable
  cardsHtml += `
    <div class="card m-2 p-3" style="width: 20rem">
      <img src="${cardsData[i].imageSrc}" class="card-img-top mx-auto" alt="..." />
      <div class="card-body text-center ">
        <h5 class="card-title">${cardsData[i].title}</h5>
        <p class="card-text">${cardsData[i].text}</p>
        <a href="${cardsData[i].buttonLink}" class="btn btn-primary">${cardsData[i].buttonLabel}</a>
      </div>
    </div>
  `;
}

// Set the HTML code for the services container element to the cardsHtml variable
services.innerHTML = cardsHtml;

var TextChange = document.querySelector(".TextChange");

var Textlist = ["Translator", "Developer", "Subtitler", "Transcriptionist"];
var index = 0;

setInterval(function () {
  TextChange.innerHTML = Textlist[index];
  index = (index + 1) % Textlist.length;
}, 1000);

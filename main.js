// console.log('Hello World');
var API_KEY = "17429661-27ad2b9499022818487c366b9";

const form = document.querySelector("form");
const input = document.querySelector("input");
const loadingImg = document.querySelector("#loadingImg");
const imgSection = document.querySelector(".imgSec");

// document.cookie = new Cookie('SameSite');

loadingImg.style.display = "none";

form.addEventListener("submit", formSubmitted);

function formSubmitted(e) {
  e.preventDefault();
  const searchTerm = input.value;
  // console.log(searchTerm);
  searchStrt();
  search(searchTerm)
    .then(displayImages)
    .then(() => (loadingImg.style.display = "none"));
}

function searchStrt() {
    loadingImg.style.display = "";
    imgSection.innerHTML = "";
}

function search(term) {
  var URL =
    "https://pixabay.com/api/?key=" +
    API_KEY +
    "&q=" +
    encodeURIComponent(term);
  // console.log(URL);
  return fetch(URL)
    .then((response) => response.json())
    .then((result) => {
      return result.hits;
    });
}

function displayImages(images) {
  images.forEach((image) => {
    // console.log(image.largeImageURL);
    const imgEl = document.createElement("img");
    imgEl.src = image.largeImageURL;
    imgSection.appendChild(imgEl);
  });
}

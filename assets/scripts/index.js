// Add map

function initMap() {
  var positionBasilica = { lat: 41.403756, lng: 2.174305 };
  var opt = {
    center: positionBasilica,
    zoom: 17,
  };
  var map = new google.maps.Map(document.querySelector(".contacts__map"), opt);

  const image = {
    url:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
  };
}

// Popup

const pictures = document.querySelectorAll(".works__image");
const slider = document.querySelector(".works__slider");
const popupContent = document.querySelector(".works__content");
const closePopup = document.querySelector(".works__cross");
let imageIndex = 0;

for (let i = 0; i < pictures.length; i++) {
  pictures[i].addEventListener("click", (e) => {
    e.preventDefault;
    imageIndex = i;
    showBigPicture(pictures[i]);
  });
}

function showBigPicture(picture) {
  slider.style.display = "block";
  popupContent.innerHTML = "";
  let bigPicture = document.createElement("img");
  bigPicture.classList.add("works__slide");
  bigPicture.src = picture.src;
  popupContent.appendChild(bigPicture);
}

closePopup.addEventListener("click", (e) => {
  slider.style.display = "none";
});

// Slider

const buttonPrev = document.querySelector(".works__button_prev");
const buttonNext = document.querySelector(".works__button_next");

buttonPrev.addEventListener("click", showPrevPicture);
buttonNext.addEventListener("click", showNextPicture);

function showNextPicture() {
  let singleImage = document.querySelector(".works__slide");
  imageIndex++;
  if (imageIndex >= pictures.length) {
    imageIndex = 0;
  }
  singleImage.src = pictures[imageIndex].src;
}

function showPrevPicture() {
  let singleImage = document.querySelector(".works__slide");
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = pictures.length - 1;
  }
  singleImage.src = pictures[imageIndex].src;
}

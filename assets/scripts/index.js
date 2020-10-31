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

// Team block

const awesomeIconsFirstClass = ["fab", "fab", "fab", "far"];
const awesomeIconsSecondClass = [
  "fa-facebook-f",
  "fa-twitter",
  "fa-dribbble",
  "fa-envelope",
];
const teamPersons = document.querySelector(".team__persons");

fetch("./../../data/team.json")
  .then((data) => data.json())
  .then((data) =>
    data.forEach((person) => {
      let teamPerson = document.createElement("div");
      teamPerson.classList.add("team__person");
      teamPerson.classList.add(`team__person_${person.id}`);
      teamPerson.style.background = `url('./../../assets/img/team_${person.id}.png')`;
      teamPerson.style.backgroundRepeat = "no-repeat";
      teamPerson.style.backgroundSize = "contain";
      teamPersons.appendChild(teamPerson);

      let teamInfo = document.createElement("div");
      teamInfo.classList.add("team__info");
      teamPerson.appendChild(teamInfo);

      let teamName = document.createElement("span");
      teamName.classList.add("team__name");
      teamName.textContent = person.name;
      teamInfo.appendChild(teamName);

      let teamJob = document.createElement("span");
      teamJob.classList.add("team__job");
      teamJob.textContent = "/" + person.job;
      teamInfo.appendChild(teamJob);

      let teamDescription = document.createElement("p");
      teamDescription.classList.add("team__description");
      teamDescription.textContent = person.speech;
      teamInfo.appendChild(teamDescription);

      let teamContacts = document.createElement("div");
      teamContacts.classList.add("team__contacts");
      teamInfo.appendChild(teamContacts);

      Object.entries(person.socialLinks).map((link, index) => {
        let teamContact = document.createElement("a");
        teamContacts.appendChild(teamContact);
        teamContact.classList.add("team__contact");
        teamContact.href = link[1];

        let teamSocial = document.createElement("i");
        teamSocial.classList.add("team__social");
        teamSocial.classList.add(`team__social_${link[0]}`);
        teamSocial.classList.add(awesomeIconsFirstClass[index]);
        teamSocial.classList.add(awesomeIconsSecondClass[index]);
        teamContact.appendChild(teamSocial);
      });
    })
  );

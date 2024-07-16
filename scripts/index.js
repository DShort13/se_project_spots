const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    alt: "Val Thorens",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
    alt: "Restaurant terrace",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
    alt: "An outdoor cafe",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
    alt: "A very long bridge, over the forest and through the trees",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
    alt: "Tunnel with morning light",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
    alt: "Mountain house",
  },
];

// Profile elements
const editProfileButton = document.querySelector(".profile__edit-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const cardModalButton = document.querySelector(".profile__add-btn");

// Form elements
const editProfileModal = document.querySelector("#edit-modal");
const editProfileForm = editProfileModal.querySelector("#edit-profile-form");
const editProfileModalCloseBtn =
  editProfileModal.querySelector("#modal-close-btn");
const nameInput = editProfileModal.querySelector("#profile-name-input");
const descriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);
const cardModal = document.querySelector("#add-card-modal");
const cardModalCloseBtn = cardModal.querySelector("#modal-close-btn");
const cardModalForm = cardModal.querySelector("#add-card-form");
const imageInput = cardModal.querySelector("#add-card-link-input");
const titleInput = cardModal.querySelector("#add-card-caption-input");

// Card-related elements
const cardTemplate = document.querySelector("#card-template").content;
const cardsList = document.querySelector(".cards__list");

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function handleEditProfileSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closeModal(editProfileModal);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  const inputValues = { name: titleInput.value, link: imageInput.value };
  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);

  closeModal(cardModal);
}

function getCardElement(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardNameElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");

  cardNameElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.alt;

  return cardElement;
}

editProfileButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openModal(editProfileModal);
});

editProfileModalCloseBtn.addEventListener("click", () => {
  closeModal(editProfileModal);
});

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

cardModalButton.addEventListener("click", () => {
  openModal(cardModal);
});

cardModalCloseBtn.addEventListener("click", () => {
  closeModal(cardModal);
});

initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardsList.prepend(cardElement);
});

cardModalForm.addEventListener("submit", handleAddCardSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault();
}

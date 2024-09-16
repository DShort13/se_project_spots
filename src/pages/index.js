import "./index.css";
import {
  enableValidation,
  settings,
  resetValidation,
  disableButton,
} from "../scripts/validation.js";
import Api from "../utils/Api.js";

let selectedCard, selectedCardId;

// API
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "58406471-2704-4b39-bb10-f7b7656fbc17",
    "Content-Type": "application/json",
  },
});

api
  .getAppInfo()
  .then(([cards, users]) => {
    cards.reverse();
    cards.forEach((card) => {
      renderCard(card);
    });

    profileImage.src = users.avatar;
    profileName.textContent = users.name;
    profileDescription.textContent = users.about;
  })
  .catch(console.error);

// Universal elements
const closeButtons = document.querySelectorAll("#modal-close-btn");

// Profile elements
const editProfileButton = document.querySelector(".profile__edit-btn");
const profileImage = document.querySelector(".profile__avatar");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const cardModalButton = document.querySelector(".profile__add-btn");
const avatarModalButton = document.querySelector(".profile__avatar-btn");

// Card form elements
const editProfileModal = document.querySelector("#edit-modal");
const editProfileForm = editProfileModal.querySelector("#edit-profile-form");
const nameInput = editProfileModal.querySelector("#profile-name-input");
const descriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);
const cardModal = document.querySelector("#card-modal");
const cardModalForm = cardModal.querySelector("#card-form");
const cardSubmitButton = cardModal.querySelector(".modal__submit-btn");
const imageInput = cardModal.querySelector("#card-link-input");
const titleInput = cardModal.querySelector("#card-caption-input");

// Avatar form elements
const avatarModal = document.querySelector("#avatar-modal");
const avatarModalForm = avatarModal.querySelector("#edit-avatar-form");
const avatarSubmitButton = avatarModal.querySelector(".modal__submit-btn");
const avatarInput = avatarModal.querySelector("#profile-avatar-input");

// Delete form elements
const deleteModal = document.querySelector("#delete-modal");

// Card-related elements
const cardTemplate = document.querySelector("#card-template").content;
const cardsList = document.querySelector(".cards__list");

// Preview image popup elements
const previewModal = document.querySelector("#preview-modal");
const previewModalImageElement = document.querySelector(".modal__image");
const previewModalCaptionElement = document.querySelector(".modal__caption");

// Functions
function closeModalOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
}

function closeModalEsc(evt) {
  if (evt.key === "Escape") {
    const modalOpened = document.querySelector(".modal_opened");
    closeModal(modalOpened);
  }
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeModalEsc);
  modal.addEventListener("mousedown", closeModalOverlay);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeModalEsc);
  modal.removeEventListener("mousedown", closeModalOverlay);
}

function renderCard(item, method = "prepend") {
  const cardElement = getCardElement(item);
  cardsList[method](cardElement);
}

function getCardElement(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardNameElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-btn");
  const cardBinButton = cardElement.querySelector(".card__bin-btn");

  cardImageElement.src = data.link;
  cardImageElement.alt = data.alt;
  cardNameElement.textContent = data.name;

  cardLikeButton.addEventListener("click", handleLike);
  cardBinButton.addEventListener("click", () =>
    handleDeleteCard(cardElement, data)
  );
  cardImageElement.addEventListener("click", () => handleImageClick(data));

  return cardElement;
}

// Event handlers
function handleAvatarSubmit(evt) {
  evt.preventDefault();
  api
    .editAvatarInfo(avatarInput.value)
    .then((data) => {
      profileImage.src = data.avatar;
      closeModal(avatarModal);
    })
    .catch(console.error);
  avatarModalForm.reset();
}

function handleLike(evt) {
  evt.target.classList.toggle("card__like-btn_liked");
}

function handleDeleteCard(cardElement, data) {
  selectedCard = cardElement;
  selectedCardId = data;
  openModal(deleteModal);
  // evt.target.closest(".card").remove();
}

function handleImageClick(data) {
  previewModalImageElement.src = data.link;
  previewModalImageElement.alt = data.name;
  previewModalCaptionElement.textContent = data.name;
  openModal(previewModal);
}

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  api
    .editUserInfo({ name: nameInput.value, about: descriptionInput.value })
    .then((data) => {
      profileName.textContent = data.name;
      profileDescription.textContent = data.about;
      closeModal(editProfileModal);
    })
    .catch(console.error);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  api
    .addCard({ name: titleInput.value, link: imageInput.value })
    .then((data) => {
      const cardElement = getCardElement(data);
      cardsList.prepend(cardElement);
      cardModalForm.reset();
      disableButton(cardSubmitButton, settings);
      closeModal(cardModal);
    })
    .catch(console.error);
}

function handleDeleteCardSubmit(evt) {
  evt.preventDefault();
  api
    .deleteCard(selectedCardId)
    .then(() => {
      selectedCard.remove();
      closeModal(deleteModal);
    })
    .catch(console.error);
}

// Event listeners
closeButtons.forEach((button) => {
  const modal = button.closest(".modal");
  button.addEventListener("click", () => closeModal(modal));
});

avatarModalButton.addEventListener("click", () => {
  openModal(avatarModal);
});

avatarModalForm.addEventListener("submit", handleAvatarSubmit);

editProfileButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  resetValidation(editProfileForm, [nameInput, descriptionInput], settings);
  openModal(editProfileModal);
});

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

cardModalButton.addEventListener("click", () => {
  openModal(cardModal);
});

cardModalForm.addEventListener("submit", handleAddCardSubmit);

deleteModal.addEventListener("submit", handleDeleteCardSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault();
}

enableValidation(settings);

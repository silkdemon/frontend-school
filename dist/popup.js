"use strict";
const modal = document.querySelector(".modal-container");
const registerButton = document.querySelectorAll(".register-btn");
const closeModalIcon = document.querySelector(".close-icon");
const overlay = document.querySelector(".overlay");
const openModal = () => {
    modal.classList.remove("hidden");
};
const closeModal = () => {
    modal.classList.add("hidden");
};
// Открытие модалки по кнопке
for (let i = 0; i < registerButton.length; i++) {
    console.log(registerButton[i].className);
    if (registerButton[i].className === "register-btn") {
        registerButton[i].addEventListener("click", openModal);
    }
}
// Закрытие модалки по крестику
closeModalIcon.addEventListener("click", closeModal);
// Закрытие модалки нажатием в другую область
// overlay.addEventListener("click", closeModal);
// Закрытие модалки клавишей ESC
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

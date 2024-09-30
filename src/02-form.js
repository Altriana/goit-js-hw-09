console.log(localStorage);

const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
const emailInput = form.elements.email;
const localStorageKey = "feedback-form-state";


const localStorageValue = () => {
    const object = {
        email: emailInput.value,
        message: textarea.value,
    }
    localStorage.setItem(localStorageKey, JSON.stringify(object));
};


form.addEventListener("input", () => {
    localStorage.setItem(localStorageKey, localStorageValue);
});
form.addEventListener("textarea", () => {
    localStorage.setItem(localStorageKey, localStorageValue);
});
textarea.value = localStorage.getItem(localStorageKey, localStorageValue);
emailInput.value = localStorage.getItem(localStorageKey, localStorageValue);


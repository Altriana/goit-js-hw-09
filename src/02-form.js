const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const emailInput = form.elements.email;
const textarea = form.elements.message;


const localStorageValue = () => {
    const object = {
        email: emailInput.value,
        message: textarea.value,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(object));
};

form.addEventListener("input", () => {
  localStorageValue();
});
    const objectValue = localStorage.getItem(localStorageKey);
    const value = JSON.parse(objectValue);
    textarea.value = value.message;
    emailInput.value = value.email; 


form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (emailInput.value === "" || textarea.value === "") {
   return alert("All form fields must be filled in");
   };
    console.log({
        email: emailInput.value.trim(),
        message: textarea.value.trim(),
    });
  localStorage.removeItem(localStorageKey);
  form.reset();
});

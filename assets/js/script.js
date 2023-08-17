let showOrHide = document.querySelector("#show");
let password = document.querySelector("#password");
showOrHide.addEventListener("click", (e) => {
  password.type = password.type === "password" ? "text" : "password";
  showOrHide.value = showOrHide.value === "show" ? "hide" : "show";
});

let form = document.querySelector("form");
let firstName = document.querySelector("#first-name");

let lastName = document.querySelector("#last-name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let confirmPassword = document.querySelector("#confirm-password");
let submitButton = document.querySelector('button[type="submit"]');
let input = document.querySelector("input");

//error show variables
let firstNameError = document.querySelector(".first-name-error");
let lastNameError = document.querySelector(".last-name-error");
let emailError = document.querySelector(".email-error");
let phoneError = document.querySelector(".phone-error");
let confirmPasswordError = document.querySelector(".confirm-password-error");
let passwordError = document.querySelector(".password-error");

firstName.addEventListener("keyup", () => {
  if (!firstName.value.match(/[^a-zA-Z]/g)) {
    firstNameError.innerText = "";
  } else {
    firstNameError.innerText = "Minimum 3 or more characters required";
  }
});

lastName.addEventListener("keyup", () => {
  if (!lastName.value.match(/[^a-zA-Z]/g)) {
    lastNameError.innerText = "";
  } else {
    lastNameError.innerText = "Only characters allowed";
  }
});

email.addEventListener("keyup", () => {
  if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g)) {
    emailError.innerText = "";
  } else {
    emailError.innerText = "Please enter a valid email";
  }
});

phone.addEventListener("keyup", () => {
  if (phone.value.match(/[0-9]{10}/g)) {
    phoneError.innerText = "";
  } else {
    phoneError.innerText = "Please enter a valid phone number";
  }
});

confirmPassword.addEventListener("keyup", () => {
  if (confirmPassword.value === password.value) {
    confirmPasswordError.innerText = "";
  } else {
    confirmPasswordError.innerText = "Password does not match";
  }
});

password.addEventListener("blur", () => {
  if (password.value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g)) {
    passwordError.innerText = "";
  } else {
    passwordError.innerText =
      "Minimum 8 characters required\n Number and Capital letters required";
  }
});

form.addEventListener('submit',(e)=>{
  if(firstName.value === "" || lastName.value === "" || email.value === "" || phone.value === "" || password.value === "" || confirmPassword.value === "" || password.value !== confirmPassword.value) {

    e.preventDefault();
  }
 
})


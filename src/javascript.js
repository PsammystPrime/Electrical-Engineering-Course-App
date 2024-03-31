const submit = document.querySelector(".create_button");
const para = document.querySelector(".para");
const pass1 = document.querySelector(".error");
const pass2 = document.querySelector(".error2");
const email = document.getElementById("Email");

email.addEventListener("input", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

submit.addEventListener("click", function (e) {
  if (pass1.value === pass2.value) {
    para.textContent = "Registration Successful, welcome";
  } else if (pass1.value == !pass2.value) {
    para.textContent = "*Passwords do not match";
  } else if (pass1.value === "" && pass2.value === "") {
    para.textContent = "Fill all fields";
  }
  e.preventDefault();
});

const username = document.querySelector("#user");
const password = document.getElementById("pass");
const LoginBtn = document.getElementById("loginBtn");

LoginBtn.addEventListener("click", function (e) {
  //
  if (username.value === "SyncIntern" && password.value === "Test123") {
  } else {
    e.preventDefault();
  }
});

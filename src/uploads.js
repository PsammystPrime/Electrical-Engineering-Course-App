const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  uploadFiles();
}

function uploadFiles() {
  const url = "https://httpbin.org/post";
  const formData = new FormData(form);

  const fetchOptions = {
    method: "post",
    body: formData,
  };
  fetch(url, fetchOptions);
}

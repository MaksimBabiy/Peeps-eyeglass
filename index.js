window.onload = () => {
  let input = document.querySelector("#input");
  let inputContainer = document.querySelector("#section_subscribe_form");
  let subscribeBtn = document.querySelector("#subscribeBtn");
  let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
  let error = document.createElement("em");
  let success = document.createElement("em");
  let isError = false;
  success.style.color = "green";
  success.innerHTML = "Thank you for subscribing!";
  error.style.color = "red";
  error.style.marginLeft = "15px";
  error.innerText = "email is invalid";

  subscribeBtn &&
    subscribeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (isError == false && input.value.length > 0) {
        if (inputContainer.contains(error)) {
          inputContainer.removeChild(error);
        }
        inputContainer.appendChild(success);
      }
    });
  input &&
    input.addEventListener("input", (e) => {
      subscribeBtn.disabled = isError;
      if (e.target.value !== "") {
        if (inputContainer.contains(success)) {
          inputContainer.removeChild(success);
        }
        if (e.target.value.match(emailReg)) {
          if (inputContainer.contains(error)) {
            isError = false;
            inputContainer.removeChild(error);
          }
        } else {
          if (!inputContainer.contains(error)) {
            isError = true;
            inputContainer.appendChild(error);
          }
        }
      }
    });

  let arrow = document.querySelector("#arrow");
  arrow && arrow.addEventListener("click", scrollToTop);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

function getResponse(event) {
  event.preventDefault();
  let responseElement = document.querySelector("#result");
  responseElement.innerHTML = "Generating email, please wait...";
  let responseContainer = document.querySelector("#outputContainer");
  responseContainer.classList.remove("hidden");
  let containerElement = document.querySelector("#container");
  containerElement.classList.remove("centered-layout");
  containerElement.classList.add("grid-layout");
}
let buttonElement = document.querySelector("#generateBtn");
buttonElement.addEventListener("click", getResponse);

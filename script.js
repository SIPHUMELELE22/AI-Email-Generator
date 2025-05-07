function generateResponse(response) {
  new Typewriter("#result", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 10,
    loop: false,
  });
}

function getResponse(event) {
  event.preventDefault();
  let promptElement = document.querySelector("#prompt");
  let apiKey = "a8410f837a6231f43oc1a1t6c91926bb";
  let context =
    "You are an expert email writer, generate a well-structured email for the given prompt.";
  let prompt = `User instructions: Generate an email for ${promptElement.value}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  if (!promptElement.value) {
    alert("Please enter a prompt before generating the email.");
    return;
  }

  let responseElement = document.querySelector("#result");
  responseElement.innerHTML = `<div class="generating">⏳ Generating email, please wait...</div>`;
  let responseContainer = document.querySelector("#outputContainer");
  responseContainer.classList.remove("hidden");
  let containerElement = document.querySelector("#container");
  containerElement.classList.remove("container");
  containerElement.classList.add("grid-layout");

  axios.get(apiUrl).then(generateResponse);
}
let buttonElement = document.querySelector("#generateBtn");
buttonElement.addEventListener("click", getResponse);

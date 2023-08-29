const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];

  if (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) {
    messages.push("Please check your email");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});

const message = document.getElementById("message");

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

signupButton.addEventListener("click", function () {
  const email = emailInput.value;
  if (isValidEmail(email)) {
    message.textContent = "Sign Up successful!";
  } else {
    message.textContent = "Please check your email";
  }
});

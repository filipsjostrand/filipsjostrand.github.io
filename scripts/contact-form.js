// Initialize EmailJS with your public key
emailjs.init("uXilaKD1gHjMOC_Fk");

// Get references to the input fields
var usernameField = document.getElementById("user-name");
var userEmailField = document.getElementById("user-email");
var userSubjectField = document.getElementById("subject");
var userMessageField = document.getElementById("user-message");

// function sendFormEmail() {
function sendFormEmail(event) {
  if (event) event.preventDefault(); // stop form from reloading

  const loader = document.getElementById("form-loader");
  loader.style.display = "block"; // 🔄 Show loader
  
  let user_name = usernameField.value;
  let user_email = userEmailField.value;
  let user_subject = userSubjectField.value;
  let user_message = userMessageField.value;

  // Constructing message data
  let templateParams = {
    from_name: user_name,
    from_email: user_email, // Ensure this is included for reply-to functionality
    subject: user_subject,
    message: user_message,
  };

  // Sending the email using EmailJS
  emailjs
    .send("service_qes9d4k", "template_cmihpce", templateParams)
    .then(function (response) {
      console.log("SUCCESS", response.status, response.text);
      alert("✉︎ 👍🙏");
      resetForm();
      closeForm();
    })
    .catch(function (error) {
      console.error("FAILED", error);
      alert("Error, Failed to send message");
    })
    .finally(() => {
      loader.style.display = "none"; // Hide loader
    });
}

//_ _ _

var navBarContainer = document.querySelector(".grid-container");

var isFormOpen = false;

// Get the Form
var form = document.getElementById("myForm");

// Get the element that opens the form
var formBtn = document.getElementById("form-button");

// Get the <span> element that closes the form
var closeFormSpan = document.getElementsByClassName("close-form")[0];

var formMessageBox = document.getElementById("user-message");
var charCounter = document.getElementById("char-counter");
var maxChars = 1000;

// When the user clicks the button, open the form
formBtn.onclick = function () {
  form.style.display = "flex";
  isFormOpen = true;
  navBarContainer.style.display = "none";
};

// Initialize the input field booleans to false
var isUserNameValid = false;
var isUserEmailValid = false;
var isUserSubjectValid = false;
var isUserMessageValid = false;

var isSendFormValid = false;

var usernamePattern = /^[a-zA-Z0-9_åäöÅÄÖ ]{2,50}$/;
var userEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

var sendFormButton = document.querySelector(".send-form-button");
var loaderSymbol = document.querySelector(".loader");

var username = "";
var userEmail = "";
var userSubject = "";
var userMessage = "";

var formInputText = "";

function closeForm() {
  resetForm();
  form.style.display = "none";
  isUserNameValid = false;
  isUserEmailValid = false;
  isUserSubjectValid = false;
  isUserMessageValid = false;
  isFormOpen = false;
  navBarContainer.style.display = "grid";
  sendFormButton.disabled = true;
}

// When the user clicks anywhere outside of the form, close it
window.onclick = function (event) {
  if (event.target == form) {
    form.style.display = "none";
    isFormOpen === false;
    navBarContainer.style.display = "grid";
  }
};

// Check number of characters in the form message
function checkNumberOfCharacters(formMessageBox) {
  const currentLength = formMessageBox.value.length;
  charCounter.textContent = `${currentLength}/${maxChars}`;

  if (currentLength > maxChars) {
    formMessageBox.value = formMessageBox.value.slice(0, maxChars); // Trim the excess characters
    charCounter.textContent = `${maxChars}/${maxChars}`;
  }

  // Add or remove 'exceeded' class based on current length
  if (currentLength > maxChars) {
    charCounter.classList.add("exceeded");
  } else {
    charCounter.classList.remove("exceeded");
  }

  return formMessageBox.value;
}

formMessageBox.addEventListener("keydown", (e) => {
  checkNumberOfCharacters(formMessageBox);
});

// _ _ _

function unlockTextarea(textarea) {
  textarea.readOnly = false;
  textarea.classList.remove("locked");
  textarea.classList.add("unlocked");
}

function lockTextarea(textarea) {
  textarea.readOnly = true;
  textarea.classList.remove("unlocked");
  textarea.classList.add("locked");
}

function unlockField(field) {
  field.readOnly = false;
  field.classList.remove("locked");
  field.classList.add("unlocked");
}

function lockField(field) {
  field.readOnly = true;
  field.classList.remove("unlocked");
  field.classList.add("locked");
}

// _ _ _

//usernameField
// Add an event listener to the username field
usernameField.addEventListener("input", function () {
  username = usernameField.value;

  // Check if the controller field has a certain value or condition
  // For example, let's enable the userEmail field when the username field is passes the usernamePattern-test and has more than 1 character.
  if (usernamePattern.test(username) && username.length >= 2) {
    isUserNameValid = true;
    userEmailField.style.backgroundColor = "#fefefe";
    usernameField.style.backgroundColor = "#fefefe";
  } else if (!usernamePattern.test(username) || username.length < 2) {
    usernameField.style.backgroundColor = "#e6bc86";
    isUserNameValid = false;
    sendFormButton.disabled = true;
    sendFormButton.style.backgroundColor = "rgba(138, 31, 31, 0.822)";
  }

  // Enable or disable the userEmail field based on the (boolean value) "isUserNameValid"

  // _ _ _

  if (usernamePattern.test(usernameField.value)) {
    isUserNameValid = true;
    unlockField(userEmailField);
  } else {
    isUserNameValid = false;
    lockField(userEmailField);
  }
  checkFormInputBooleans();
});

//userEmailField
// Add an event listener to the userEmail field
userEmailField.addEventListener("input", function () {
  userEmail = userEmailField.value;
  if (userEmailPattern.test(userEmail)) {
    isUserEmailValid = true;
    userSubjectField.style.backgroundColor = "rgb(248, 248, 248)";
    userEmailField.style.backgroundColor = "rgb(248, 248, 248)";
  } else {
    userEmailField.style.backgroundColor = "#e6bc86";
    isUserEmailValid = false;
    sendFormButton.disabled = true;
    sendFormButton.style.backgroundColor = "rgb(191, 127, 24)";
  }

  if (userEmailPattern.test(userEmailField.value)) {
    isUserEmailValid = true;
    unlockField(userSubjectField);
  } else {
    isUserNameValid = false;
    lockField(userSubjectField);
  }
  checkFormInputBooleans();
});

//userSubjectField
// Add an event listener to the userSubject field
userSubjectField.addEventListener("input", function () {
  userSubject = userSubjectField.value;
  if (userSubject.length > 0) {
    isUserSubjectValid = true;
    userMessageField.style.backgroundColor = "rgb(248, 248, 248)";
    userSubjectField.style.backgroundColor = "rgb(248, 248, 248)";
  } else if (userSubject.length < 1) {
    userSubjectField.style.backgroundColor = "#e6bc86";
    userMessageField.style.backgroundColor = "rgba(235, 235, 235, 0.795)";
    isUserSubjectValid = false;
    sendFormButton.disabled = true;
    sendFormButton.style.backgroundColor = "rgb(191, 127, 24)";
  }
  if (userSubjectField.value !== "") {
    unlockTextarea(userMessageField);
  } else {
    isUserNameValid = false;
    lockTextarea(userMessageField);
  }
  checkFormInputBooleans();
});

//userMessageField
// Add an event listener to the userMessage field
userMessageField.addEventListener("input", function () {
  userMessage = userMessageField.value;
  if (userMessage.length > 0) {
    isUserMessageValid = true;
    userMessageField.style.backgroundColor = "#fefefe";
    userSubjectField.style.backgroundColor = "#fefefe";

    checkFormInputBooleans();
  } else if (userMessage.length < 1) {
    userMessageField.style.backgroundColor = "#e6bc86";
    isUserMessageValid = false;
    sendFormButton.disabled = true;
    sendFormButton.style.backgroundColor = "rgb(191, 127, 24)";
  }
});

function checkFormInputBooleans() {
  isSendFormValid =
    isUserNameValid &&
    isUserEmailValid &&
    isUserSubjectValid &&
    isUserMessageValid;
  if (
    isUserNameValid &&
    isUserEmailValid &&
    isUserSubjectValid &&
    isUserMessageValid
  ) {
    sendFormButton.style.backgroundColor = "rgb(94, 143, 128)";
    sendFormButton.style.color = "rgb(248, 248, 248)";
    sendFormButton.disabled = false;
    isSendFormValid = true;
  } else if (
    !isUserNameValid ||
    !isUserEmailValid ||
    !isUserSubjectValid ||
    !isUserMessageValid
  ) {
    sendFormButton.disabled = true;
    sendFormButton.style.backgroundColor = "rgb(180, 90, 12)";
    isSendFormValid = false;
  }
}

// _ _ _

// sendForm-knappen trycks ned
// Event listener for the sendFormButton click
sendFormButton.addEventListener("click", function (event) {
  // Check if the button is disabled
  if (!sendFormButton.disabled) {
    // If the button is not disabled, run the submit functionality
    sendFormEmail(event);
  } else {
    // Prevent form submission if the button is disabled
    event.preventDefault();
  }
});

// _ _ _

// Ersätt "http" och "www" om de finns i input (test kan användas på RegEx)
function validateInput(formInputText) {
  let formInputTextA = formInputText;
  const words = formInputTextA.split(/\s+/);

  const httpRegEx = /http/;
  const wwwRegEx = /www/;
  if (httpRegEx.test(words)) {
    alert("Input can't 'http' or 'https'.");
    formInputText = formInputTextA.replace(httpRegEx, "");
  } else if (wwwRegEx.test(words)) {
    alert("Input can't include 'www'.");
    formInputText = formInputTextA.replace(wwwRegEx, "");
  }
  return formInputText;
}

function resetForm() {
  usernameField.value = "";
  userEmailField.value = "";
  userSubjectField.value = "";
  userMessageField.value = "";
  usernameField.style.backgroundColor = "rgb(248, 248, 248)";
  userEmailField.style.backgroundColor = "rgba(180, 180, 180, 0.795)";
  userSubjectField.style.backgroundColor = "rgba(180, 180, 180, 0.795)";
  userMessageField.style.backgroundColor = "rgba(180, 180, 180, 0.795)";
  sendFormButton.style.backgroundColor = "rgba(138, 31, 31, 0.822)";
  userEmailField.readOnly = true;
  userSubjectField.readOnly = true;
  userMessageField.readOnly = true;
  sendFormButton.disabled = true;
}

document.addEventListener("keydown", checkKey);

function checkKey(e) {
  e = e || window.event;

  if (isFormOpen && e.keyCode == "27") {
    closeForm();
  } else {
  }
}

// Activate arrow-key-press inside the opened form
checkKey();

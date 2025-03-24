// Formulär [Översättning]

selectedLanguage = sessionStorage.getItem("languageVariable");

var navBarContainer = document.querySelector('.grid-container');

if (!selectedLanguage) {
    sessionStorage.setItem("languageVariable", 'sv');
    selectedLanguage = sessionStorage.getItem("languageVariable");
    // selectedLanguage (om !selectedLanguage (i form))...
  }

// Tack-meddelande (alert-box) [Översättning]
var formThankYouMessage = [{
    formMessage: {
    en: ["Thank you for your message! :) ʕ •ᴥ•ʔ "],
    sv: ["Tack för ditt meddelande! :) ʕ •ᴥ•ʔ "],
}
}]

var isFormOpen = false;

// Get the Form
var form = document.getElementById("myForm");

// Get the element that opens the form
var formBtn = document.getElementById("form-button");

// Get the <span> element that closes the form
var closeFormSpan = document.getElementsByClassName("close-form")[0];

var formMessageBox = document.getElementById("user-message");
var charCounter = document.getElementById('char-counter');
var maxChars = 1000;

// When the user clicks the button, open the form
formBtn.onclick = function() {
  form.style.display = "flex";
  isFormOpen = true;
  navBarContainer.style.display = "none";
}

// Initialize the input field booleans to false
var isUserNameValid = false;
var isUserEmailValid = false;
var isUserSubjectValid = false;
var isUserMessageValid = false;

var isSendFormValid = false;

var usernamePattern = /^[a-zA-Z0-9_åäöÅÄÖ ]{2,50}$/;
var userEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Get references to the input fields
var usernameField = document.getElementById('user-name');
var userEmailField = document.getElementById('user-email');
var userSubjectField = document.getElementById('subject');
var userMessageField = document.getElementById('user-message');

var sendFormButton = document.querySelector('.send-form-button');
var loaderSymbol = document.querySelector('.loader');

var username = '';
var userEmail = '';
var userSubject = '';
var userMessage = '';

var formInputText = '';

function closeForm() {
        resetForm();
        form.style.display = "none";
        isUserNameValid = false;
        isUserEmailValid = false;
        isUserSubjectValid = false;
        isUserMessageValid = false;
        isFormOpen = false;
        navBarContainer.style.display = "grid";
}

// When the user clicks anywhere outside of the form, close it
window.onclick = function(event) {
  if (event.target == form) {
    form.style.display = "none";
    isFormOpen === false;
    navBarContainer.style.display = "grid";
  }
}

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
  charCounter.classList.add('exceeded');
} else {
  charCounter.classList.remove('exceeded');
}

return formMessageBox.value;
}

formMessageBox.addEventListener("keydown", (e) => {checkNumberOfCharacters(formMessageBox)});


// _ _ _

        //usernameField
        // Add an event listener to the username field
        usernameField.addEventListener('input', function() {
            username = usernameField.value;

            // Check if the controller field has a certain value or condition
            // For example, let's enable the userEmail field when the username field is passes the usernamePattern-test and has more than 1 character.
            if (usernamePattern.test(username)) {
                isUserNameValid = true;
                userEmailField.style.backgroundColor = '#fefefe';
                usernameField.style.backgroundColor = '#fefefe';
            } else if (!usernamePattern.test(username) || username.length < 2) {
                usernameField.style.backgroundColor = '#e6bc86';
                isUserNameValid = false;
                sendFormButton.disabled = true;
                sendFormButton.style.backgroundColor = '(138, 31, 31, 0.822)';
            }

            // Enable or disable the userEmail field based on the (boolean value) "isUserNameValid"
            userEmailField.disabled = !isUserNameValid;
            formInputText = usernameField.value;
            usernameField.value = validateInput(formInputText);
            checkFormInputBooleans();
        });

        //userEmailField
        // Add an event listener to the userEmail field
        userEmailField.addEventListener('input', function() {
            userEmail = userEmailField.value;
            if (userEmailPattern.test(userEmail)) {
                isUserEmailValid = true;
                userSubjectField.style.backgroundColor = 'rgb(248, 248, 248)';
                userEmailField.style.backgroundColor = 'rgb(248, 248, 248)';
            } else {
                userEmailField.style.backgroundColor = '#e6bc86';
                isUserEmailValid = false;
                sendFormButton.disabled = true;
                sendFormButton.style.backgroundColor = 'rgb(191, 127, 24)';
            }
            userSubjectField.disabled = !isUserEmailValid;
            formInputText = userEmailField.value;
            userEmailField.value = validateInput(formInputText);
            checkFormInputBooleans();
        })

        //userSubjectField
        // Add an event listener to the userSubject field
        userSubjectField.addEventListener('input', function() {
                userSubject = userSubjectField.value;
            if (userSubject.length > 0) {
                isUserSubjectValid = true;
                userMessageField.style.backgroundColor = 'rgb(248, 248, 248)';
                userSubjectField.style.backgroundColor = 'rgb(248, 248, 248)';
            } else if (userSubject.length < 1) {
                userSubjectField.style.backgroundColor = '#e6bc86';
                userMessageField.style.backgroundColor = 'rgba(235, 235, 235, 0.795)';
                isUserSubjectValid = false;
                sendFormButton.disabled = true;
                sendFormButton.style.backgroundColor = 'rgb(191, 127, 24)';
            }
            userMessageField.disabled = !isUserSubjectValid;
            formInputText = userSubjectField.value;
            userSubjectField.value = validateInput(formInputText);
            checkFormInputBooleans();
        });

        //userMessageField
        // Add an event listener to the userMessage field
        userMessageField.addEventListener('input', function() {
            userMessage = userMessageField.value;
        if (userMessage.length > 0) {
            isUserMessageValid = true;
            userMessageField.style.backgroundColor = '#fefefe';
            userSubjectField.style.backgroundColor = '#fefefe';
        } else if (userMessage.length < 1) {
            userMessageField.style.backgroundColor = '#e6bc86';
            isUserMessageValid = false;
            sendFormButton.disabled = true;
            sendFormButton.style.backgroundColor = 'rgb(191, 127, 24)';
        }
        userMessageField.disabled = !isUserMessageValid;
        formInputText = userMessageField.value;
        userMessageField.value = validateInput(formInputText);
        checkFormInputBooleans();
    });

    function checkFormInputBooleans() {
        isSendFormValid = isUserNameValid && isUserEmailValid && isUserSubjectValid && isUserMessageValid;
        if (isUserNameValid && isUserEmailValid && isUserSubjectValid && isUserMessageValid) {
            sendFormButton.style.backgroundColor = 'rgb(94, 143, 128)';
            sendFormButton.style.color = 'rgb(248, 248, 248)';
            sendFormButton.disabled = false;
            isSendFormValid = true;
        } else if (!isUserNameValid || !isUserEmailValid || !isUserSubjectValid || !isUserMessageValid){
            sendFormButton.disabled = true;
            sendFormButton.style.backgroundColor = 'rgb(180, 90, 12)';
            isSendFormValid = false;
        }
        userMessageField.disabled = false;
    }

    // _ _ _

        // sendForm-knappen trycks ned
        // Event listener for the sendFormButton click
        sendFormButton.addEventListener("click", function(event) {

            // Check if the button is disabled
            if (!sendFormButton.disabled) {
                // If the button is not disabled, run the submit functionality
                sendFormEmail();
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
        formInputText = formInputTextA.replace(httpRegEx, '');
    } else if (wwwRegEx.test(words)) {
        alert("Input can't include 'www'.");
        formInputText = formInputTextA.replace(wwwRegEx, '');
    }
    return formInputText;
}

function resetForm() {
    usernameField.value = "";
    userEmailField.value = "";
    userSubjectField.value = "";
    userMessageField.value = "";
    usernameField.style.backgroundColor = 'rgb(248, 248, 248)';
    userEmailField.style.backgroundColor = 'rgba(180, 180, 180, 0.795)';
    userSubjectField.style.backgroundColor = 'rgba(180, 180, 180, 0.795)';
    userMessageField.style.backgroundColor = 'rgba(180, 180, 180, 0.795)';
    sendFormButton.style.backgroundColor = 'rgba(138, 31, 31, 0.822)';
    userEmailField.disabled = true;
    userSubjectField.disabled = true;
    userMessageField.disabled = true;
    sendFormButton.disabled = true;
}

document.addEventListener('keydown', checkKey);

function checkKey(e) {
    e = e || window.event;

    if (isFormOpen && e.keyCode == "27") {
        closeForm();
    } else {

    }
  }

  // Activate arrow-key-press inside the opened form
    checkKey();

// Send form to email
function sendFormEmail() {
    selectedLanguage = sessionStorage.getItem("languageVariable");

    let user_name = usernameField.value;
    let message = "Email: " + userEmailField.value + "\nSubject: " + userSubjectField.value + "\n\nMessage:\n" + userMessageField.value;

    emailjs.send("service_qes9d4k", "template_cmihpce", {
        from_name: user_name,
        message: message,
    }).then(function(response) {
    }, function(error) {
    });

    alert(formThankYouMessage[0].formMessage[selectedLanguage]);
    resetForm();
    closeForm()
}
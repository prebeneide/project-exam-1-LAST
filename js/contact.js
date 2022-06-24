const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const yourmessage = document.querySelector("#yourmessage");
const message = document.querySelector("#returnmessage");
const button = document.querySelector("button");


function checkIfButtonIsDisabled() {
    if (checkLength(name.value, 5) && checkLength(subject.value, 15) && checkLength(yourmessage.value, 25) && validateEmail(email.value)) {
        button.disabled = false;
    } else {
         message.innerHTML = "";
         button.disabled = true;
    }
}

name.addEventListener("keyup", checkIfButtonIsDisabled);
subject.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);
yourmessage.addEventListener("keyup", checkIfButtonIsDisabled);


function submitForm(event) {

    event.preventDefault();    

    message.innerHTML = '<div class="message">Your message has been sent</div>';

    button.disabled = true;
   
    form.reset();
}

form.addEventListener("submit", submitForm);

//


name.addEventListener("keyup", checkNameField);
subject.addEventListener("keyup", checkSubjectField);
email.addEventListener("keyup", checkEmailField);
yourmessage.addEventListener("keyup", checkYourMessageField);

function checkNameField() {
  if (checkLength(name.value, 5)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
}

function checkSubjectField() {
  if (checkLength(subject.value, 15)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
}

function checkEmailField() {
    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
}

function checkYourMessageField() {
    if (checkLength(yourmessage.value, 25)) {
        yourMessageError.style.display = "none";
      } else {
        yourMessageError.style.display = "block";
      }
    }


function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
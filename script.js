let btn = document.getElementById("up");

/*si hauteur >= 900 px le bouton apparait dans l ecran*/

window.onscroll = function () {
  if (window.scrollY >= 1300) {
    btn.style.display = "block";
  } else btn.style.display = "none";
};

/*scroller ver le haut si on click */
btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

/*form validation*/

var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("name").value;

  if (name.length <= 8) {
    nameError.innerHTML = "Name is required !";
    nameError.style.color="red";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "write a full name";
    nameError.style.color="red";
    return false;
  }

  nameError.innerHTML = "valid";
  nameError.style.color="#09c846";
  return true;
}

/*********/

function validateEmail() {
  var email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required !";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email invalid !";
    emailError.style.color="red";
    return false;
  }

  emailError.innerHTML = "valid";
  emailError.style.color="#09c846";
  return true;
}

/********/

function validateMessage() {
  var message = document.getElementById("message").value;

  let required = 30;
  let msg = required - message.length;
  if (msg > 0) {
    messageError.innerHTML = msg + "more caracters required";
    messageError.style.color="red";
    return false;
  }

  messageError.innerHTML = "valid";
  messageError.style.color="#09c846";
  return true;
}

function ValidateForm() {
  if (!validateName() || !validateEmail() || !validateMessage()) {
  
    submitError.innerHTML = alert("Please fix error to submit"); 
    messageError.innerHTML = "message is  required !";
    emailError.innerHTML = "Email is required !";
    nameError.innerHTML = "Name is required !";

    return false;
  } else if (validateName() || validateEmail() || validateMessage()) {
    submitError.innerHTML = alert("submittd successfully");
    return true;
  }
}

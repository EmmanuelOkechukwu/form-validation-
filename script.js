const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the values from the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  // LOGIC FOR USERNAME
  if (usernameValue === "") {
    // show error
    // add error class
    setErrorFor(username, "Username cannot be blank");
  } else {
    // add success class
    setSuccessFor(username);
  }

  //   LOGIC FOR EMAIL VALIDATION
  //   if email value is empty, show error msg
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    // if the email is not valid
    setErrorFor(email, "Email is not valid");
  } else {
    // if the email is valid
    setSuccessFor(email);
  }

  //   LOGIC FOR PASSWORD
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
    //   } else if (passwordValue !== 6) {
    //     setErrorFor(password, "Password must not be less than six");
  } else {
    setSuccessFor(password);
  }

  //   LOGIC OFOR PASSWORD2
  if (password2Value === "") {
    setErrorFor(password2, "Password2 cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Password2 does not match");
  } else {
    setSuccessFor(password2);
  }

  //   Assignment: set a function to show success message above
}

// function for Username error input
function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector("small");

  //   add error message inside small
  small.innerText = message;

  //   add error class
  formControl.className = "form-control error";
}

// function for  Username success input
function setSuccessFor(input) {
  const formControl = input.parentElement; //.form-control
  formControl.className = "form-control success";
}

// function email input
function isEmail(email) {
  return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
}

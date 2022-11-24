//getting the element from the html file
const usernameE1 = document.querySelector("#Username");
const passwordE1 = document.querySelector("#password");
const confirmPasswordE1 = document.querySelector("#confirmPassword");
const emailE1 = document.querySelector("#email");
const contactNo = document.querySelector("#contact-no");
const citizenshipID = document.querySelector("#CID");
const form = document.querySelector("#container1");

form.addEventListener("submit", function (e) {
  let isPasswordValid = checkPassword(),
    isconfirmPassword = checkConfirmPassword(),
    isEmailValid = checkEmail(),
    isContactNoValid = checkContactNo(),
    isCitizenshipIDValid = checkCitizenshipID(),
    isUsernameValid = checkUsername();
  let isFormValid =
    isPasswordValid &&
    isUsernameValid &&
    isEmailValid &&
    isconfirmPassword &&
    isContactNoValid &&
    isCitizenshipIDValid; //submit to server if the form is valid
  if (isFormValid) {
    confirm("Is the given information correct."); //to get final confirmation or to reset the data if the information is wrong.
    return true;
  } else {
    e.preventDefault(); //prevent the form from submitting
  }
});

//function to validate the username
const checkUsername = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = usernameE1.value.trim(); //trim is going to remove the space before and after the text and give text only
  //calling the showerror function with two arguments
  if (!isRequired(username)) {
    showError(usernameE1, "Username cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      usernameE1,
      `Username must be between ${min} and ${max} characters.`
    );
  } else if (!isUsernameValid(username)) {
    showError(
      usernameE1,
      "Username is not valid, every first letter of ur name should start with a capital letter. "
    );
    //calling the showsuccess function with two arguments
  } else {
    showSuccess(usernameE1);
    valid = true;
  }
  return valid;
};

//Regular expression to validate the student name pattern
const isUsernameValid = (username) => {
  const re =
    /^([A-Z]{1}[a-zA-Z]+)(\s[A-Z]{1}[a-zA-Z]+)?(\s[A-Z]{1}[a-zA-Z]+)?$/;
  return re.test(username);
};

//validating the email
const checkEmail = () => {
  let valid = false;
  const email = emailE1.value.trim();
  if (!isRequired(email)) {
    showError(emailE1, "email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailE1, "Email is not valid");
  } else {
    showSuccess(emailE1);
    valid = true;
  }
  return valid;
};

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

//function to validate the Contact-no
const checkContactNo = () => {
  let valid = false;
  const min = 8,
    max = 8;
  const contact = contactNo.value.trim(); //trim is going to remove the space before and after the text and give text only
  //calling the showerror function with two arguments
  if (!isRequired(contact)) {
    showError(contactNo, "Contact number cannot be blank.");
  } else if (!isBetween(contact.length, min, max)) {
    showError(contactNo, `Contact number must be of ${max} numbers.`);
  } else if (!isContactNoValid(contact)) {
    showError(contactNo, "Contact number is not valid! ");
    //calling the showsuccess function with two arguments
  } else {
    showSuccess(contactNo);
    valid = true;
  }
  return valid;
};

//Regular expression to validate the student ID pattern
const isContactNoValid = (contact) => {
  const re = /^([0-9]{8})$/;
  return re.test(stdID);
};

//function to validate the CID
const checkCitizenshipID = () => {
  let valid = false;
  const min = 11,
    max = 11;
  const CID = citizenshipID.value.trim(); //trim is going to remove the space before and after the text and give text only
  //calling the showerror function with two arguments
  if (!isRequired(CID)) {
    showError(citizenshipID, "Citizenship ID cannot be blank.");
  } else if (!isBetween(CID.length, min, max)) {
    showError(
      citizenshipID,
      `Citizenship ID must be between ${min} and ${max} characters.`
    );
  } else if (!isCitizenshipIDValid(CID)) {
    showError(citizenshipID, "Citizenship ID is not valid!");
    //calling the showsuccess function with two arguments
  } else {
    showSuccess(citizenshipID);
    valid = true;
  }
  return valid;
};

//Regular expression to validate the student ID pattern
const isCitizenshipIDValid = (CID) => {
  const re = /^([0-9]{8})$/;
  return re.test(stdID);
};

//function to validate the checkPassword
const checkPassword = () => {
  let valid = false;
  const min = 8,
    max = 25;
  const password = passwordE1.value.trim(); //trim is going to remove the space before and after the text and give text only
  //calling the showerror function with two arguments

  if (!isRequired(password)) {
    showError(passwordE1, "Password cannot be blank.");
  } else if (!isBetween(password.length, min, max)) {
    showError(
      passwordE1,
      `Password must be between ${min} to ${max} characters.`
    );
  } else if (!isPasswordSecured(password)) {
    showError(passwordE1, "Password is not valid!");
  }
  //calling the showsuccess function with two arguments
  else {
    showSuccess(passwordE1);
    valid = true;
  }
  return valid;
};

const isPasswordSecured = (password) => {
  const re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return re.test(password);
};

function checkConfirmPassword() {
  let valid = false;
  const passwordCheck = confirmPasswordE1.value.trim();
  if (!isRequired(passwordCheck)) {
    showError(confirmPasswordE1, "You will have to confirm to proceed");
  } else if (!passwordMatch()) {
    showError(confirmPasswordE1, "Password is not matching");
  } else {
    showSuccess(confirmPasswordE1);
    valid = true;
  }
  return valid;
}
const passwordMatch = () => {
  if (passwordE1.value == confirmPasswordE1.value) {
    return true;
  }
};

//reusable code
//Function to check whether the input section is empty or not
const isRequired = (value) => (value === "" ? false : true);
//Function to check the length of the the character in the input section
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

//reusable code
//Regulating the css classes according to the validation
const showError = (input, message) => {
  //get the form field element
  const formField = input.parentElement;
  //add the error class
  formField.classList.remove("success");
  formField.classList.add("error");
  //show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  //get the form field element
  const formField = input.parentElement;
  //remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");
  //hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

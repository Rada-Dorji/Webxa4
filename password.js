//getting the element from the html file
const usernameE1 = document.querySelector("#username");
const emailE1 = document.querySelector("#email");
const form = document.querySelector("#container1");

form.addEventListener("submit", function (e) {
  let isEmailValid = checkEmail(),
    isUsernameValid = checkUsername();
  let isFormValid = isEmailValid && isUsernameValid; //submit to server if the form is valid
  if (isFormValid) {
    confirm("Is the given information correct."); //to get final confirmation or to reset the data if the information is wrong.
    return true;
  } else {
    e.preventDefault(); //prevent the form from submitting
  }
});

//function to validate the student name
const checkUsername = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = usernameE1.value.trim(); //trim is going to remove the space before and after the text and give text only
  //calling the showerror function with two arguments
  if (!isRequired(username)) {
    showError(usernameE1, "username cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      usernameE1,
      `username must be between ${min} and ${max} characters.`
    );
  } else if (!isUsernameValid(username)) {
    showError(usernameE1, "username is not valid!");
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

const button = document.querySelector("#submitBtn");
//getting the element from the html file
const usernameE1 = document.querySelector("#username");
// const passwordE1 = document.querySelector("#Password");
const form = document.querySelector("#container1");

button.addEventListener("click", function (e) {
  let isUsernameValid = checkUsername();
  let isFormValid = isUsernameValid; //submit to server if the form is valid
  if (isFormValid) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateFormData(formData);
    resetForm();
    // var formDa
    confirm("Are you sure you want to submit."); //to get final confirmation or to reset the data if the information is wrong.
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
    showError(usernameE1, "Username is not valid! ");
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

function readFormData() {
  var formData = {};
  formData["username"] = document.getElementById("username").value;
  formData["leaveType"] = document.getElementById("leaveType").value;
  formData["leaveBal"] = document.getElementById("leaveBal").value;
  formData["leaveStart"] = document.getElementById("leaveStart").value;
  formData["leaveEnd"] = document.getElementById("leaveEnd").value;
  formData["phoneNumber"] = document.getElementById("phoneNumber").value;
  formData["reason"] = document.getElementById("reason").value;
  formData["status"] = Status;
  return formData;
}

var SlNo = 0;
var Status = "Pending";
function insertNewRecord(data) {
  SlNo++;
  var table = document
    .getElementById("stdList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.lenght);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = SlNo;

  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.leaveType;

  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.leaveBal;

  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.leaveStart;

  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.leaveEnd;

  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.phoneNumber;

  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.reason;

  cell8 = newRow.insertCell(7);
  cell8.innerHTML = Status;

  cell9 = newRow.insertCell(8);
  cell9.innerHTML = '<a onClick="onEdit(this)">Edit</a>';
  cell9 = newRow.insertCell(8);
  cell9.innerHTML = '<a onClick="onDelete(this)">Delete</a>';
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("username").value = selectedRow.cells[0].innerHTML;
  document.getElementById("leaveType").value = selectedRow.cells[1].innerHTML;
  document.getElementById("leaveBal").value = selectedRow.cells[2].innerHTML;
  document.getElementById("leaveStart").value = selectedRow.cells[3].innerHTML;
  document.getElementById("leaveEnd").value = selectedRow.cells[4].innerHTML;
  document.getElementById("phoneNumber").value = selectedRow.cells[5].innerHTML;
  document.getElementById("reason").value = selectedRow.cells[6].innerHTML;
  // document.getElementById("status").value = selectedRow.cells[7].innerHTML;
}

var selectedRow = null;

function resetForm() {
  document.getElementById("username").value = "";
  document.getElementById("leaveType").value = "";
  document.getElementById("leaveBal").value = "";
  document.getElementById("leaveStart").value = "";
  document.getElementById("leaveEnd").value = "";
  document.getElementById("phoneNumber").value = "";
  document.getElementById("reason").value = "";
  // document.getElementById("status").value = "";
  selectedRow = null;
}

function updateFormData(formData) {
  selectedRow.cells[0].innerHTML = formData.username;
  selectedRow.cells[1].innerHTML = formData.leaveType;
  selectedRow.cells[2].innerHTML = formData.leaveBal;
  selectedRow.cells[3].innerHTML = formData.leaveStart;
  selectedRow.cells[4].innerHTML = formData.leaveEnd;
  selectedRow.cells[5].innerHTML = formData.phoneNumber;
  selectedRow.cells[6].innerHTML = formData.reason;
  // selectedRow.cells[7].innerHTML = formData.status;
}
function onDelete(td) {
  if (confirm("Are You Sure to DELETE this record")) {
    row = td.parentElement.parentElement;
    document.getElementById("stdList").deleteRow(row.rowIndex);
    resetForm();
  }
}

const button = document.querySelector("#submitBtn");
//getting the element from the html file
const usernameE1 = document.querySelector("#Name");
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
    showError(usernameE1, "Cannot be blank.");
  } else {
    showSuccess(usernameE1);
    valid = true;
  }
  return valid;
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
  formData["Year"] = document.getElementById("Year").value;
  formData["Title"] = document.getElementById("Title").value;
  formData["Publisher"] = document.getElementById("Publisher").value;
  formData["URL"] = document.getElementById("URL").value;
  formData["LSBN"] = document.getElementById("LSBN").value;
  //   formData["Mode"] = document.getElementById("Mode").value;
  //   formData["reason"] = document.getElementById("reason").value;
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
  cell2.innerHTML = data.Year;

  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Title;

  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.Publisher;

  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.URL;

  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.LSBN;

  cell7 = newRow.insertCell(6);
  cell7.innerHTML = Status;

  //   cell8 = newRow.insertCell(7);
  //   cell8.innerHTML = Status;

  cell8 = newRow.insertCell(7);
  cell8.innerHTML = '<a onClick="onEdit(this)">Edit</a>';
  cell9 = newRow.insertCell(8);
  cell9.innerHTML = '<a onClick="onDelete(this)">Delete</a>';
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("Year").value = selectedRow.cells[0].innerHTML;
  document.getElementById("Title").value = selectedRow.cells[1].innerHTML;
  document.getElementById("Publisher").value = selectedRow.cells[2].innerHTML;
  document.getElementById("URL").value = selectedRow.cells[3].innerHTML;
  document.getElementById("LSBN").value = selectedRow.cells[4].innerHTML;
  //   document.getElementById("Mode").value = selectedRow.cells[5].innerHTML;
  //   document.getElementById("reason").value = selectedRow.cells[6].innerHTML;
  // document.getElementById("status").value = selectedRow.cells[7].innerHTML;
}

var selectedRow = null;

function resetForm() {
  document.getElementById("Year").value = "";
  document.getElementById("Title").value = "";
  document.getElementById("Publisher").value = "";
  document.getElementById("URL").value = "";
  document.getElementById("LSBN").value = "";
  //   document.getElementById("Mode").value = "";
  //   document.getElementById("reason").value = "";
  // document.getElementById("status").value = "";
  selectedRow = null;
}

function updateFormData(formData) {
  selectedRow.cells[0].innerHTML = formData.Year;
  selectedRow.cells[1].innerHTML = formData.From;
  selectedRow.cells[2].innerHTML = formData.Publisher;
  selectedRow.cells[3].innerHTML = formData.URL;
  selectedRow.cells[4].innerHTML = formData.LSBN;
  //   selectedRow.cells[5].innerHTML = formData.Mode;
  //   selectedRow.cells[6].innerHTML = formData.reason;
  // selectedRow.cells[7].innerHTML = formData.status;
}
function onDelete(td) {
  if (confirm("Are You Sure to DELETE this record")) {
    row = td.parentElement.parentElement;
    document.getElementById("stdList").deleteRow(row.rowIndex);
    resetForm();
  }
}

// const button = document.querySelector("#submitBtn");
// //getting the element from the html file
// const usernameE1 = document.querySelector("#Name");
// // const passwordE1 = document.querySelector("#Password");
// const form = document.querySelector("#container1");

// button.addEventListener("click", function (e) {
//   let isUsernameValid = checkUsername();
//   let isFormValid = isUsernameValid; //submit to server if the form is valid
//   if (isFormValid) {
//     var formData = readFormData();
//     if (selectedRow == null) insertNewRecord(formData);
//     else updateFormData(formData);
//     resetForm();
//     // var formDa
//     confirm("Are you sure you want to submit."); //to get final confirmation or to reset the data if the information is wrong.
//     return true;
//   } else {
//     e.preventDefault(); //prevent the form from submitting
//   }
// });

// //function to validate the username
// const checkUsername = () => {
//   let valid = false;
//   const min = 3,
//     max = 25;
//   const username = usernameE1.value.trim(); //trim is going to remove the space before and after the text and give text only
//   //calling the showerror function with two arguments
//   if (!isRequired(username)) {
//     showError(usernameE1, "Cannot be blank.");
//   } else {
//     showSuccess(usernameE1);
//     valid = true;
//   }
//   return valid;
// };

// //reusable code
// //Function to check whether the input section is empty or not
// const isRequired = (value) => (value === "" ? false : true);
// //Function to check the length of the the character in the input section
// const isBetween = (length, min, max) =>
//   length < min || length > max ? false : true;

// //reusable code
// //Regulating the css classes according to the validation
// const showError = (input, message) => {
//   //get the form field element
//   const formField = input.parentElement;
//   //add the error class
//   formField.classList.remove("success");
//   formField.classList.add("error");
//   //show the error message
//   const error = formField.querySelector("small");
//   error.textContent = message;
// };

// const showSuccess = (input) => {
//   //get the form field element
//   const formField = input.parentElement;
//   //remove the error class
//   formField.classList.remove("error");
//   formField.classList.add("success");
//   //hide the error message
//   const error = formField.querySelector("small");
//   error.textContent = "";
// };

// function readFormData() {
//   var formData = {};
//   formData["Year"] = document.getElementById("Year").value;
//   formData["Title"] = document.getElementById("Title").value;
//   formData["Publisher"] = document.getElementById("Publisher").value;
//   formData["URL"] = document.getElementById("URL").value;
//   formData["LSBN.No"] = document.getElementById("LSBN.No").value;
//   //   formData["Mode"] = document.getElementById("Mode").value;
//   //   formData["reason"] = document.getElementById("reason").value;
//   formData["status"] = Status;
//   return formData;
// }

// var SlNo = 0;
// var Status = "Pending";
// function insertNewRecord(data) {
//   SlNo++;
//   var table = document
//     .getElementById("stdList")
//     .getElementsByTagName("tbody")[0];
//   var newRow = table.insertRow(table.lenght);
//   cell1 = newRow.insertCell(0);
//   cell1.innerHTML = SlNo;

//   cell2 = newRow.insertCell(1);
//   cell2.innerHTML = data.Year;

//   cell3 = newRow.insertCell(2);
//   cell3.innerHTML = data.Title;

//   cell4 = newRow.insertCell(3);
//   cell4.innerHTML = data.Publisher;

//   cell5 = newRow.insertCell(4);
//   cell5.innerHTML = data.URL;

//   cell6 = newRow.insertCell(5);
//   cell6.innerHTML = data.LSBN.No;

//   cell7 = newRow.insertCell(6);
//   cell7.innerHTML = Status;

//   //   cell8 = newRow.insertCell(7);
//   //   cell8.innerHTML = Status;

//   cell8 = newRow.insertCell(7);
//   cell8.innerHTML = '<a onClick="onEdit(this)">Edit</a>';
//   cell9 = newRow.insertCell(8);
//   cell9.innerHTML = '<a onClick="onDelete(this)">Delete</a>';
// }

// function onEdit(td) {
//   selectedRow = td.parentElement.parentElement;
//   document.getElementById("Year").value = selectedRow.cells[0].innerHTML;
//   document.getElementById("Title").value = selectedRow.cells[1].innerHTML;
//   document.getElementById("Publisher").value = selectedRow.cells[2].innerHTML;
//   document.getElementById("URL").value = selectedRow.cells[3].innerHTML;
//   document.getElementById("LSBN.No").value = selectedRow.cells[4].innerHTML;
//   //   document.getElementById("Mode").value = selectedRow.cells[5].innerHTML;
//   //   document.getElementById("reason").value = selectedRow.cells[6].innerHTML;
//   //   document.getElementById("status").value = selectedRow.cells[5].innerHTML;
// }

// var selectedRow = null;

// function resetForm() {
//   document.getElementById("Year").value = "";
//   document.getElementById("Title").value = "";
//   document.getElementById("Publisher").value = "";
//   document.getElementById("URL").value = "";
//   document.getElementById("LSBN.No").value = "";
//   //   document.getElementById("Mode").value = "";
//   //   document.getElementById("reason").value = "";
//   //   document.getElementById("status").value = "";
//   selectedRow = null;
// }

// function updateFormData(formData) {
//   selectedRow.cells[0].innerHTML = formData.Year;
//   selectedRow.cells[1].innerHTML = formData.Title;
//   selectedRow.cells[2].innerHTML = formData.Publisher;
//   selectedRow.cells[3].innerHTML = formData.URL;
//   selectedRow.cells[4].innerHTML = formData.LSBN.No;
//   //   selectedRow.cells[5].innerHTML = formData.Mode;
//   //   selectedRow.cells[6].innerHTML = formData.reason;
//   //   selectedRow.cells[5].innerHTML = formData.status;
// }
// function onDelete(td) {
//   if (confirm("Are You Sure to DELETE this record")) {
//     row = td.parentElement.parentElement;
//     document.getElementById("stdList").deleteRow(row.rowIndex);
//     resetForm();
//   }
// }

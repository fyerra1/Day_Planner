var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var addUserInput = $(".btn")
addUserInput.on("click", captureInput)

function captureInput(e) {
  console.log("yes");
  var init = e.target.parentElement;
  console.log(init);
  var userInput = init.children[0].value;
  console.log(userInput);
  var name = init.children[0].id;
  localStorage.setItem("name", userInput)
}

function renderStoredInput() {
  var activity = localStorage.getItem("name")
  console.log(activity);
}

renderStoredInput();



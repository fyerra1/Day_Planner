var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var addUserInput = $("#button-addon1")
addUserInput.on("click", captureInput)

function captureInput(e) {
  var init = e.target.parentElement;
  console.log(init);
  var userInput = init.children[0].value;
  console.log(userInput);
  console.log("yes");
}
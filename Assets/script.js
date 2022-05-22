var today = moment();
var addUserInput = $(".saveBtn")
var timeBlocks = $(".description");

// displays current time and date
$("#currentDay").text(today.format("hA, MMM Do, YYYY"));

// event listner for when add button is clicked
addUserInput.on("click", captureInput)

// function to capture user's input and store it/them is local storage
function captureInput(e) {
  var init = e.target.parentElement;
  var userInput = init.children[1].value;
  var name = init.children[1].id;
  localStorage.setItem(name, userInput)
}

// function to display stored information
function renderStoredInput() {
  for (var i = 0; i < timeBlocks.length; i++) {
    var matchBlock = timeBlocks[i].id;
    var textBlocks = timeBlocks[i];
    var savedInputs = localStorage.getItem(matchBlock);
    textBlocks.textContent = savedInputs;
  } 
}

// function to color-fill timeblocks based on hour of moment
function colorBlocking() {
  var hour = moment().hour();
  var startHour = 9

  for (var i = 0; i < timeBlocks.length; i++){
    var plannerHour = startHour + i

    if (hour > plannerHour) {
    $(timeBlocks[i]).addClass("past")
    } else if (plannerHour == hour){$(timeBlocks[i]).addClass("present")}
    else {$(timeBlocks[i]).addClass("future")}
  }
}

renderStoredInput();
colorBlocking();



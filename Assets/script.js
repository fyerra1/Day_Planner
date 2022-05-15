var today = moment();
$("#currentDay").text(today.format("hA, MMM Do, YYYY"));

var addUserInput = $(".saveBtn")
addUserInput.on("click", captureInput)

function captureInput(e) {
  console.log("yes");
  var init = e.target.parentElement;
  console.log(init);
  var userInput = init.children[1].value;
  console.log(userInput);
  var name = init.children[1].id;
  console.log(name);
  localStorage.setItem(name, userInput)
  
}

var timeBlocks = $(".description").toArray();
console.log(timeBlocks);

function renderStoredInput() {
  // var activity = localStorage.getItem("name")
  // console.log(activity);
  // var savedInputs = localStorage.getItem(name)
  for (var i = 0; i < timeBlocks.length; i++) {
    var matchBlock = timeBlocks[i].id;
    var textBlocks = timeBlocks[i];
    var savedInputs = localStorage.getItem(matchBlock);
    console.log(savedInputs);
    console.log(matchBlock);
    console.log(textBlocks);
    textBlocks.textContent = savedInputs;

} 
}

function colorBlocking(e) {
var hour = moment().hour();
var startHour = 9
var block = $(".textarea")
console.log(hour);
console.log(timeBlocks[0].id);


for (var i = 0; i < timeBlocks.length; i++){
  console.log(plannerHour);
  var plannerHour = startHour + i
  if (hour > plannerHour) {
    block.addClass("past")
  } else if (plannerHour == hour){block.addClass("present")}
  else {block.addClass("future")}
}
}

renderStoredInput();
colorBlocking();



// Normal Method to add event listener

// we can't do this because it calles method when it's adding event listener
// document.querySelector("button").addEventListener("click", handleClick());

// That's why we use this passing function as a input
// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick() {
//   alert("I got Clicked");
// }

// Anonymous function to pass parameters into the event listener.
// document.querySelector("button").addEventListener("click", function () {
//   alert("I got Clicked");
// });

// Buttons pressed detection

var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    setSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Keyboard pressed detection
document.addEventListener("keypress", function (event) {
  // Gives the key which is pressed.
  // event.key;
  setSound(event.key);
  buttonAnimation(event.key);
});

function setSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 200);
}

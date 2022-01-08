var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "A":
      var clap = new Audio("music/clap.wav");
      clap.play();
      break;

    case "S":
      var hihat = new Audio("music/hihat.wav");
      hihat.play();
      break;

    case "D":
      var kick = new Audio('music/kick.wav');
      kick.play();
      break;

    case "F":
      var openhat = new Audio('music/openhat.wav');
      openhat.play();
      break;

    case "G":
      var boom = new Audio('music/boom.wav');
      boom.play();
      break;

    case "H":
      var ride = new Audio('music/ride.wav');
      ride.play();
      break;

    case "J":
      var snare = new Audio('music/snare.wav');
      snare.play();
      break;

    case "K":
      var tom = new Audio('music/tom.wav');
      tom.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
var count = 2500;
var counter = setInterval(timer, 1000);

function timer() {
  count -= 1;

  var seconds = count % 60;
  var minutes = Math.floor(count / 60);
  minutes %= 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById("left").innerHTML = minutes + ":" + seconds;
}

function timer2() {
  var now = new Date().getTime();
  var distance = now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("when").innerHTML =
    "Today " + (hours + 1) + ":" + mins;
}

timer2();

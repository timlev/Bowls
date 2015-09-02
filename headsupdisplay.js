screen.orientation.addEventListener("change", function(e) {
      alert(screen.orientation.type + " " + screen.orientation.angle);
    }, false);
document.getElementById("button").addEventListener("click", function() {
  document.documentElement.requestFullScreen();
  screen.orientation.lock("landscape-primary");

}, false);

screen.orientation.addEventListener("change", function(e) {
      alert(screen.orientation.type + " " + screen.orientation.angle);
    }, false);

function onload(){
  if (window.DeviceMotionEvent) {
    alert("DeviceMotionEvent supported");
  }
document.getElementById("button").addEventListener("click", function() {
  screen.orientation.lock("landscape-primary");
}, false);
}

function deviceMotionHandler(eventData){
  var info, xyz = "[X,Y,Z]";
  //Grab Acceleration Data from Result
  var acceleration = eventData.acceleration;
  info = xyz.replace("X", acceleration.x);
  info = info.replace("Y", acceleration.y);
  info = info.replace("Z", acceleration.z);
  document.getElementById("accel").innerHTML = info;
}

screen.orientation.addEventListener("change", function(e) {
      alert(screen.orientation.type + " " + screen.orientation.angle);
    }, false);
if (window.DeviceMotionEvent) {
  alert("DeviceMotionEvent supported");
  window.addEventListener('devicemotion', deviceMotionHandler, false);
}
function onload(){

document.getElementById("button").addEventListener("click", function() {
  screen.orientation.lock("landscape-primary");
}, false);
}

function deviceMotionHandler(eventData){
  var info, xyz = "[X,Y,Z]";
  //Grab rotation Data from Result
  var rotation = eventData.rotationRate;
  info = xyz.replace("X", rotation.alpha);
  info = info.replace("Y", rotation.beta);
  info = info.replace("Z", rotation.gamma);
  document.getElementById("accel").innerHTML = info;
};

function onload(){
  // screen.orientation.addEventListener("change", function(e) {
  //       alert(screen.orientation.type + " " + screen.orientation.angle);
  //     }, false);
  if (window.DeviceMotionEvent) {
    alert("DeviceMotionEvent supported");
    window.addEventListener('devicemotion', deviceMotionHandler, false);
  };

  document.getElementById("button").addEventListener("click", function() {
    screen.orientation.lock("landscape-primary");
  }, false);
};

$(document).ready(function() {
  $("form").submit(function(event) {
  alert("start");
  var frontEndInput = document.getElementById("gridRadios1");
  var backEndInput = document.getElementById("gridRadios2");
  event.preventDefault();
  if ((frontEndInput).checked) {
    alert("You choose to be a frontend programmer");
  } else {
    alert("You choose to be a backend programmer");
  }
  alert("end");
    });
});

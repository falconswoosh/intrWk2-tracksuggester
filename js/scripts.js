$(document).ready(function() {
  $("form").submit(function(event) {
  alert("start");
  var frontEndInput1 = document.getElementById("gridRadios1");
  var backEndInput1 = document.getElementById("gridRadios2");
  var frontEndInput2 = document.getElementById("gridRadios3");
  var backEndInput2 = document.getElementById("gridRadios4");
  event.preventDefault();
  if ((frontEndInput1).checked && (frontEndInput2)) {
    alert("You choose to be a frontend programmer");
  } else if ((backEndInput1).checked && (backEndInput2)) {
    alert("You choose to be a backend programmer");
  } else {
  }
  alert("end");
    });
});

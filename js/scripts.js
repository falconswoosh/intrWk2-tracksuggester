$(document).ready(function() {
  $("form").submit(function(event) {
  alert("start");
  var frontEndInput1 = document.getElementById("gridRadios1");
  var backEndInput1 = document.getElementById("gridRadios2");
  var frontEndInput2 = document.getElementById("gridRadios3");
  var backEndInput2 = document.getElementById("gridRadios4");
  var frontEndInput3 = document.getElementById("gridRadios6");
  var backEndInput3 = document.getElementById("gridRadios5");
  var frontEndInput4 = document.getElementById("gridRadios8");
  var backEndInput4 = document.getElementById("gridRadios7");
  event.preventDefault();
  if ((frontEndInput1).checked && (frontEndInput2).checked && (frontEndInput3).checked && (frontEndInput4).checked) {
    alert("You choose to be a frontend programmer");
  } else if ((backEndInput1).checked && (backEndInput2).checked && (backEndInput3).checked && (backEndInput4).checked) {
    alert("You choose to be a backend programmer");
  } else {
    alert("You choose to be a full-stack programmer")
  }
  alert("end");
    });
});

$(document).ready(function() {
  $("form").submit(function(event) {
  alert("start");
  var frontEndInput = document.getElementById("gridRadios1");
  var backEndInput = document.getElementById("gridRadios2");
  event.preventDefault();
  alert("end");
  });
  //alert(frontEndInput.checked);
  //alert(backEndInput.checked);
});

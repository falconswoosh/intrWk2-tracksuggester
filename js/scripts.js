$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
  var frontEndinput1 = document.getElementById("gridRadios1");
  var backEndinput1 = document.getElementById("gridRadios2");
  var notSureinput1 = document.getElementById("gridRadios3");
  var frontEndinput2 = document.getElementById("gridRadios4");
  var backEndinput2 = document.getElementById("gridRadios5");
  var notSureinput2 = document.getElementById("gridRadios6");
  var frontEndinput3 = document.getElementById("gridRadios8");
  var backEndinput3 = document.getElementById("gridRadios7");
  var notSureinput3 = document.getElementById("gridRadios9");
  var frontEndinput4 = document.getElementById("gridRadios11");
  var backEndinput4 = document.getElementById("gridRadios10");
  var notSureinput4 = document.getElementById("gridRadios12");
  if ((frontEndinput1).checked && (frontEndinput2).checked && (frontEndinput3).checked && (frontEndinput4).checked) {
   $("#results").show();
   $("#frontEndResult").show();
   $("#backEndResult").hide();
   $("#unClearResult").hide();
  } else if ((backEndinput1).checked && (backEndinput2).checked && (backEndinput3).checked && (backEndinput4).checked) {
     $("#results").show();
     $("#backEndResult").show();
     $("#frontEndResult").hide();
     $("#unClearResult").hide();
  } else {
     $("#results").show();
     $("#unClearResult").show();
     $("#backEndResult").hide();
     $("#frontEndResult").hide();
  }
    });
});

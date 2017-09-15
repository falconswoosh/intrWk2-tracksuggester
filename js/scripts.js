$(document).ready(function() {
  $("form").submit(function(event) {
  //alert("start");  (commentByAF: Use this to test this code starts as expected.)
  var frontEndInput1 = document.getElementById("gridRadios1");
  var backEndInput1 = document.getElementById("gridRadios2");
  var notSureInput1 = document.getElementById("gridRadios3");
  var frontEndInput2 = document.getElementById("gridRadios4");
  var backEndInput2 = document.getElementById("gridRadios5");
  var notSureInput2 = document.getElementById("gridRadios6");
  var frontEndInput3 = document.getElementById("gridRadios8");
  var backEndInput3 = document.getElementById("gridRadios7");
  var notSureInput3 = document.getElementById("gridRadios9");
  var frontEndInput4 = document.getElementById("gridRadios11");
  var backEndInput4 = document.getElementById("gridRadios10");
  var notSureInput4 = document.getElementById("gridRadios12");
  event.preventDefault();
  if ((frontEndInput1).checked && (frontEndInput2).checked && (frontEndInput3).checked && (frontEndInput4).checked) {
    //alert("You choose to be a frontend programmer. We recommend either our CSS/Design or Java/Android track.");
    $('#frontEndResult').show();
    $('#backEndResult').hide();
    $('#noClearChoiceResult').hide();
  } else if ((backEndInput1).checked && (backEndInput2).checked && (backEndInput3).checked && (backEndInput4).checked) {
    //alert("You choose to be a backend programmer. We recommend either Ruby/Rails, PHP/Drupal, or C$/.NET tracks");
    $('#backEndResult').show();
    $('#frontEndResult').hide();
    $('noClearChoiceResult').hide();
  } else {
    //alert("We recommend you start with any one of the tracks since they all begin with Intro to Programming and Javascript. Prior to completing these two requirements, you may decide which specific track available is more your passion.")
    $('#noClearChoiceResult').show();
    $('#backEndResult').hide();
    $('#frontEndResult').hide();
  }
  //alert("end"); (commentByAF: Use this to test this code if it gets to the end.)
  //event.preventDefault();
    });
});

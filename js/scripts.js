$(document).ready(function() {
  $("form").submit(function(event) {
  //(commentByAF: Use below alert to test this code starts as expected.)
  // alert("start");
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
  var frontState = document.getElementById("frontEndResult");
  var backState = document.getElementById("backEndResult");
  var unClearState = document.getElementById("unClearResult");
  if ((frontEndInput1).checked && (frontEndInput2).checked && (frontEndInput3).checked && (frontEndInput4).checked) {
      frontState.className=(frontState.className=='hidden')?'unhidden':'hidden';
      backState.className=(backState.className=='unhidden')?'hidden':'hidden';
      unClearState.className=(unClearState.className=='unhidden')?'hidden':'hidden';
//(commentByAF: Use below alert to test if this branch is processed as expected.)
//  alert("You seem inclined to be a frontend programmer. We recommend either our CSS/Design or Java/Android track.");
//    $('#frontEndResult').show(); //this doesn't work as expected
//    $('#backEndResult').hide(); //this doesn't work as expected
//    $('#unClearResult').hide(); //this doesn't work as expected
  } else if ((backEndInput1).checked && (backEndInput2).checked && (backEndInput3).checked && (backEndInput4).checked) {
//(commentByAF: Use below alert to test if this branch is processed as expected.)
//  alert("You seem inclined to be a backend programmer. We recommend either Ruby/Rails, PHP/Drupal, or C#/.NET tracks");
      backState.className=(backState.className=='hidden')?'unhidden':'hidden';
      frontState.className=(frontState.className=='unhidden')?'hidden':'hidden';
      unClearState.className=(unClearState.className=='unhidden')?'hidden':'hidden';
//    $('#backEndResult').show(); //this doesn't work as expected
//    $('#frontEndResult').hide(); //this doesn't work as expected
//    $('#unClearResult').hide(); //this doesn't work as expected
  } else {
//(commentByAF: Use below alert to test if this branch is processed as expected.)
// alert("We recommend you start with any one of the tracks since they all begin with Intro to Programming and Javascript. Once you are enrolled, prior to completing these two required courses, and with further collaborative guidance from our staff, you may decide which specific track available is more your passion.");
      unClearState.className=(unClearState.className=='hidden')?'unhidden':'hidden';
      frontState.className=(frontState.className=='unhidden')?'hidden':'hidden';
      backState.className=(backState.className=='unhidden')?'hidden':'hidden';
//    $('#unClearResult').show(); //this doesn't work as expected
//    $('#backEndResult').hide(); //this doesn't work as expected
//    $('#frontEndResult').hide(); //this doesn't work as expected
  }
  //(commentByAF: Use this to test this code if it gets to the end.)
  //alert("end");
  event.preventDefault();
    });
});

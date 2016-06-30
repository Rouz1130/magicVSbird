// business logic
var dieRoll = '';
var result = [];
var result2 = [];
var totalPlayer1 = 0
var totalPlayer2 = 0
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


// user logic
$(document).ready(function() {
  $("form#player1").click(function(event) {
    event.preventDefault();
    $("#bust2").hide();
    dieRoll = getRandomInt(1,7);
    if(dieRoll === 1) {
      $("#bust1").show();
      $("#resultPlayer1").empty();
      return result = [];
    } else {
      result.push(dieRoll);
      $("#resultPlayer1").append("<li>" + dieRoll + "</li>")
    }
  });

  $("form#player2").click(function(event) {
    event.preventDefault();
    $("#bust1").hide();
    dieRoll = getRandomInt(1,7);
    if(dieRoll === 1) {
      $("#bust2").show();
      $("#resultPlayer2").empty();
      return result2 = [];
    } else {
    result2.push(dieRoll);
    $("#resultPlayer2").append("<li>" + dieRoll + "</li>")
  }
  });

  $("form#holdPlayer1").click(function(event) {
    $("#resultPlayer1").empty();
    event.preventDefault();
    for (var i=0; i < result.length; i++) {
     totalPlayer1 += result[i];
   } if (totalPlayer1 >= 100) {
      $(".totalPlayer1").text(totalPlayer1);
      $("#win").show();
    } else {
      result = [];
      $(".totalPlayer1").text(totalPlayer1);
    }
  });

  $("form#holdPlayer2").click(function(event) {
    $("#resultPlayer2").empty();
    event.preventDefault();
    for (var i=0; i < result2.length; i++) {
    totalPlayer2 += result2[i];
  } if (totalPlayer2 >= 100) {
    $(".totalPlayer2").text(totalPlayer2);
    $("#win").show();
  } else {
    result2 = [];
    $(".totalPlayer2").text(totalPlayer2);
  }
  });



});

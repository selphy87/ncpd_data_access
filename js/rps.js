//need to implement lizard and spock

//Thanks to @wearnotgroot, @pradeepce, @storbek, @hermangsk & @hman1911

var playerWin = 0;
var aiWin = 0;
var draws = 0;
var playerRoll; //killjoy = 1, buzzbit = 2, ripnet = 3, crybaby = 4, slambang = 5
var gameMessage = $('#game-message');//Clean up the JS a lil
var scoreBoard = $('#scoreboard');
var array_possibilities = ['killjoy', 'buzzbit', 'ripnet', 'crybaby', 'slambang']
var number_total_games = 0;

//killjoy click
$('.killjoy').click(function() {
  playerRoll = 1;
  var computerRoll = Math.floor(Math.random() * 5 + 1);//Rock, Paper, Scissors genius AI
  
  //draw case
  if (computerRoll === playerRoll) {
    draws++;
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-draw">Draw!</p>' + '<p class="computer-message">The Computer chose killjoy too!</p>').fadeIn(300);
      $('#draws').html('').append(draws);
    });
    
    // killjoy vs AI buzzbit and and slambang
  } else if ((playerRoll === 1 && computerRoll === 2) || (playerRoll === 1 && computerRoll === 5) ){
    aiWin++;
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-lose">You lost</p>' + '<p class="computer-message">The Computer chose ' + array_possibilities[computerRoll-1]+'!</p>').fadeIn(300);
      $('#losses').html('').append(aiWin);
    });
    
    // killjoy vs AI crybaby and ripnet
  } else {
    playerWin++;
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-won">You Won!</p>' + '<p class="computer-message">The Computer chose ' + array_possibilities[computerRoll-1]+'!</p>').fadeIn(300);
      $('#wins').html('').append(playerWin);
    });                
    
  }
  number_total_games++;
//  console.log("Player Rolled " + playerRoll + " " + array_possibilities[playerRoll-1]);
//  console.log("computer Rolled " + computerRoll + " " + array_possibilities[computerRoll-1]);
  detectEndGame()
});//end of rock click

//buzzbit click
$('.buzzbit').click(function() {
  playerRoll = 2;
  var computerRoll = Math.floor(Math.random() * 5 + 1);
  //draw
  if (computerRoll === playerRoll) {
    draws++;
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-draw">Draw!</p>' + '<p class="computer-message">The Computer chose ' + array_possibilities[computerRoll-1]+' too!</p>').fadeIn(300);
      $('#draws').html('').append(draws);
    });
  //buzzbit vs AI rock
  } else if ((playerRoll === 2 && computerRoll === 1) || (playerRoll === 2 && computerRoll === 4) ) {
    playerWin++;
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-won">You Won!</p>' + '<p class="computer-message">The Computer chose ' + array_possibilities[computerRoll-1]+'!</p>').fadeIn(300);
      $('#wins').html('').append(playerWin);
    });
  //buzzbit vs AI scissors
  } else {
    aiWin++;
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-lose">You lost</p>' + '<p class="computer-message">The Computer chose ' + array_possibilities[computerRoll-1]+'!</p>').fadeIn(300);
      $('#losses').html('').append(aiWin);
    });
  }
  number_total_games++;
  // console.log("Player Rolled " + playerRoll + " " + array_possibilities[playerRoll-1]);
  // console.log("computer Rolled " + computerRoll + " " + array_possibilities[computerRoll-1]);
  detectEndGame()
});//end of paper click

//ripnet click
$('.ripnet').click(function() {
  playerRoll = 3;
  var computerRoll = Math.floor(Math.random() * 5 + 1);
  //draw
  if (computerRoll === playerRoll) {
    draws++;
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-draw">Draw!</p>' + '<p class="computer-message">The Computer chose ' + array_possibilities[computerRoll-1]+' too!</p>').fadeIn(300);
      $('#draws').html('').append(draws);
    });
  //ripnet vs AI paper
  } else if ((playerRoll === 3 && computerRoll === 1) || (playerRoll === 3 && computerRoll === 5) ){
    playerWin++;
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-won">You Won!</p>' + '<p class="computer-message">The Computer chose ' + array_possibilities[computerRoll-1]+'!</p>').fadeIn(300);
      $('#wins').html('').append(playerWin);
    });
  //ripnet vs AI rock
  } else {
    aiWin++;
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-lose">You lost</p>' + '<p class="computer-message">The Computer chose ' + array_possibilities[computerRoll-1]+'!</p>').fadeIn(300);
      $('#losses').html('').append(aiWin);
    });
  }//end of scissors click
  number_total_games++;
  // console.log("Player Rolled " + playerRoll + " " + array_possibilities[playerRoll-1]);
  // console.log("computer Rolled " + computerRoll + " " + array_possibilities[computerRoll-1]);
  detectEndGame()
});

//crybaby click
$('.crybaby').click(function() {
  playerRoll = 4;
  var computerRoll = Math.floor(Math.random() * 5 + 1);
  //draw
  if (computerRoll === playerRoll) {
    draws++;
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-draw">Draw!</p>' + '<p class="computer-message">The Computer chose ' + array_possibilities[computerRoll-1]+' too!</p>').fadeIn(300);
      $('#draws').html('').append(draws);
    });
  //crybaby vs AI paper
  } else if ((playerRoll === 4 && computerRoll === 1) || (playerRoll === 4 && computerRoll === 3) ) {
    playerWin++;
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-won">You Won!</p>' + '<p class="computer-message">The Computer chose ' + array_possibilities[computerRoll-1]+'!</p>').fadeIn(300);
      $('#wins').html('').append(playerWin);
    });
  //crybaby vs AI rock
  } else {
    aiWin++;
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-lose">You lost</p>' + '<p class="computer-message">The Computer chose ' + array_possibilities[computerRoll-1]+'!</p>').fadeIn(300);
      $('#losses').html('').append(aiWin);
    });
  }//end of scissors click
  number_total_games++;
  // console.log("Player Rolled " + playerRoll + " " + array_possibilities[playerRoll-1]);
  // console.log("computer Rolled " + computerRoll + " " + array_possibilities[computerRoll-1]);
  detectEndGame()
});


//slambang click
$('.slambang').click(function() {
  playerRoll = 5;
  var computerRoll = Math.floor(Math.random() * 5 + 1);
  //draw
  if (computerRoll === playerRoll) {
    draws++;
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-draw">Draw!</p>' + '<p class="computer-message">The Computer chose ' + array_possibilities[computerRoll-1]+' too!</p>').fadeIn(300);
      $('#draws').html('').append(draws);
    });
  //slambang vs AI paper
  } else if ((playerRoll === 5 && computerRoll === 4) || (playerRoll === 5 && computerRoll === 2)) {
    playerWin++;
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-won">You Won!</p>' + '<p class="computer-message">The Computer chose ' + array_possibilities[computerRoll-1]+'!</p>').fadeIn(300);
      $('#wins').html('').append(playerWin);
    });
  //slambang vs AI rock
  } else {
    aiWin++;
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-lose">You lost</p>' + '<p class="computer-message">The Computer chose ' + array_possibilities[computerRoll-1]+'!</p>').fadeIn(300);
      $('#losses').html('').append(aiWin);
    });
  }//end of scissors click
  number_total_games++;
  // console.log("Player Rolled " + playerRoll + " " + array_possibilities[playerRoll-1]);
  // console.log("computer Rolled " + computerRoll + " " + array_possibilities[computerRoll-1]);

  detectEndGame()
});

//press "Reset scores" to reset all scores
$('#reset-scores').click(function() {
  playerWin = 0;
  $('#wins').html(playerWin);
  draws = 0;
  $('#draws').html(draws);
  aiWin = 0;
  $('#losses').html(aiWin);
});

var detectEndGame = function(){
        
      if (number_total_games > 4) {
        $(".buttons_row").addClass("hidden")
        $(".searching_row").removeClass("hidden")
        setTimeout(function(){ 
          $(".searching_row").addClass("hidden")
       //   console.log("end game")
          $("#game_div").addClass("hidden")
          // if (playerWin > aiWin){
             constructLink();
             $("#win_div").removeClass("hidden")
          // }
          // if (aiWin > playerWin){
          //   $("#fail_div").removeClass("hidden")
          // }
          // if (aiWin == playerWin){
          //   $("#tie_div").removeClass("hidden")
          // }
        }, 1000);
       // console.log("end game")
        
      }
}

var constructLink = function(){
    
  if (code == '' || !code){
    code = getBaseCode()
    var check = true;
  }
  else {
    var check = verifyCode()
  }
  if (!check || !files[code]){
    $("#win_div .addherelink").html("Error, code not found! <a class='reload' href='#'>Retry!</a>")
    return
  }
 
  var link = files[code]
//  var link = 'https://drive.google.com/file/d/1xFybwtZd0fcK8elfSzMT9ct8iGQxTGBU/view?usp=sharing'
  $("#win_div .addherelink").html("Code found! <a target='_blank' href='"+link+"'>1 file matches!</a><br/><br/><a class='reload' href='#'>Go Back</a>")

}

var getBaseCode= function(){
  return env.substr(0,4) + "_" +scope.substr(0,3)+"_01"
}

var x_alias= ['xan', 'xax']
var p_alias= ['plc', 'pll', 'pol','pld', 'ppd']
var m_alias= ['maz', 'maa', 'mze']
var b_alias= ['bab', 'bwb','bws', 'bww', 'bsw']

var verifyCode = function(){
  if(env.substr(0,4) != code.substr(0,4)){
    return false;
  }
 // console.log("CODE SUBSTR : ", code.substr(5,3))
  if(scope=='maze' && m_alias.includes(code.substr(5,3))){
    return true;
  }
  if(scope=='xander' && x_alias.includes(code.substr(5,3))){
    return true;
  }
  if(scope=='babblefish' && b_alias.includes(code.substr(5,3))){
    return true;
  }
  if(scope=='police' && p_alias.includes(code.substr(5,3))){
    return true;
  }
  return false;
}
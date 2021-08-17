var scores, roundScore, activePlayer, gamePlaying;

init();





document.querySelector('.btn-roll').addEventListener('click', function() {
 if(gamePlaying) {
     //1. We need a random number
   var dice = Math.floor(Math.random()*6 ) + 1;

   //2.Display the result
   var diceDOM = document.querySelector('.dice');
   diceDOM.style.display = 'block';
   diceDOM.src = './img/dice-' + dice + '.png';
   //3. Update the round score if the result is not 1
   if (dice !== 1) {
    //add score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
   } else {
    //next player turn
    nextPlayer();
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
   }
 }
})


document.querySelector('.btn-hold').addEventListener('click', function() {
 if (gamePlaying) {
    //ADD Current score to the Global score
   scores[activePlayer] += roundScore;
   //Update the User Interface
   document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
   //Check if the user won the game
   if (scores[activePlayer] >= 200) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
   } else {
    //next Player turn
   nextPlayer();
   }
 }
})


document.querySelector('.btn-new').addEventListener('click', init)

function init() {
 scores = [0,0];
 roundScore = 0;
 activePlayer = 0;
 gamePlaying = true;

 document.querySelector('.dice').style.display = 'none';

 document.getElementById('score-0').textContent = '0';
 document.getElementById('score-1').textContent = '0';
 document.getElementById('current-0').textContent = '0';
 document.getElementById('current-1').textContent = '0';

 document.querySelector('#name-0').textContent = 'Player 1';
 document.querySelector('#name-1').textContent = 'Player 2';
 
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');

 document.querySelector('.player-0-panel').classList.remove('active');
 document.querySelector('.player-1-panel').classList.remove('active');
 
 document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer() {
 activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
}


//Instructions 
document.querySelector(".instructions").addEventListener("click", function(){
        document.querySelector(".modal").classList.add("show");
        document.querySelector(".close").addEventListener("click", function(){
            document.querySelector(".modal").classList.remove("show");
    });
});
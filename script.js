
/* text contents for best of 5:*/
let bo5 = 0
let winCount = 0
let loseCount = 0 
let tieCount = 0

function tie() {
  var roundCounter = document.querySelector('.roundCounter');
  var tie = document.createElement('p');
  bo5++;
  tieCount++;
  tie.classList.add('tie')
  tie.textContent = ('Tie' + ' '+' ');
  roundCounter.appendChild(tie);
  
}


const buttons = document.querySelector('.buttons');
const gameOver = document.createElement ('p');
const winOrLose = document.querySelector ('.winOrLose')
winOrLose.appendChild(gameOver)

function again(){
  const reset = document.querySelector('.reset');
  const playAgain = document.createElement ('BUTTON');
  playAgain.textContent = 'Play again!';
  playAgain.classList.add('playAgain');
  reset.appendChild(playAgain);
  playAgain.addEventListener('click', function(){
    buttons.style.display = 'block';
    playAgain.style.display = 'none';
    bo5 = 0;
    const cpu = document.querySelector('.cpu');
    cpu.textContent = 'Computer Chose:';
    const player = document.querySelector('.player');
    player.textContent = 'You chose:';
    const roundCounter = document.querySelector('.roundCounter');
    roundCounter.textContent = 'Best of 5:';
    winOrLose.textContent = '';
  

  })
}



function gameEnder(){
  if (bo5 === 5 && winCount>loseCount){
  gameOver.textContent = 'Game Over! You win!!';
  buttons.style.display = 'none';
  
  again();

  } else if (bo5 === 5 && winCount < loseCount) {
  gameOver.textContent = 'Game Over! You lose!!';
  buttons.style.display = 'none';
 
  again();

  } else if (bo5 === 5 && winCount === loseCount) {
    gameOver.textContent = 'Tie Game!';
    buttons.style.display = 'none';
    
    again();
   

  }

}








function win(){
  var roundCounter = document.querySelector('.roundCounter');
  var win = document.createElement('p');
  win.classList.add('win')
  win.textContent = ('Win'+ ' ');
  bo5++;
  winCount++;
  roundCounter.appendChild(win);
}

function lose(){
  var roundCounter = document.querySelector('.roundCounter');
  var lose = document.createElement('p');
  lose.classList.add('lose');
  lose.textContent = ('Lose'+ ' ');
  bo5++;
  loseCount++;
  roundCounter.appendChild(lose);
}

//---- what did computer choose?
function output(computerSelection){
  const cpu = document.querySelector('.cpu');
  const content = document.createElement('p');
  content.classList.add('content')
  content.textContent = computerSelection + ' ';
  cpu.appendChild(content);
}

 
 

function computertest(){   
  var options = ['Rock','Paper','Scissors'] 
  var randomNum = Math.floor(Math.random()*3) // 0 , 1, 2 for rock paper scissors
  var computerChoice = options[randomNum] // assign numbers to 'options'
  return computerChoice 
  
} 


//rock stuff------------------------
   

    document.getElementById("choiceRock").addEventListener("click", function(){
      displayRock();
      const computerSelection = computertest();
      playRock(computerSelection);
      output(computerSelection);
      gameEnder()
      
    })
        // Text Replace for 'you chose' ---------------------
        function displayRock () {
          
          const player = document.querySelector('.player');
          const playerContent = document.createElement ('p');
          playerContent.classList.add('playerContent');
          playerContent.textContent = 'Rock'+' ';
          player.appendChild(playerContent)
        }       


        // Determine if win/lose for 'rock'
   function playRock(computerSelection) {
          
          if (computerSelection ==='Rock') {
              tie()
          } else if (computerSelection === 'Paper'){
              lose() // Rock and Paper
            
            } else if (computerSelection === 'Scissors'){
              win()
          }
        }
// scissor stuff----------------
    document.getElementById('choiceScissors').addEventListener('click', function(){
    displayScissors();
    let computerSelection = computertest()
    output(computerSelection);
    playScissors(computerSelection);
    gameEnder();
    })

function displayScissors () {
    const player = document.querySelector('.player');
    const playerContent = document.createElement('p');
    playerContent.classList.add('playerContent');
    playerContent.textContent = 'Scissors' + ' '
    player.appendChild(playerContent)

  }

function playScissors (computerSelection) {
    if (computerSelection === 'Scissors'){
      return tie();
      } else if (computerSelection === 'Rock'){
      return lose();
    } else if (computerSelection === 'Paper') {
      return win();
    }
  }

    document.getElementById('choicePaper').addEventListener("click", function(){
      displayPaper();
      const computerSelection = computertest()
      playPaper(computerSelection);
      output(computerSelection);
      gameEnder()
    })

function displayPaper(){
      const player = document.querySelector('.player');
      const playerContent = document.createElement('p');
      playerContent.textContent='Paper'+ ' ';
      playerContent.classList.add('playerContent');
      player.appendChild(playerContent);
  
    }
function playPaper (computerSelection) {
      if (computerSelection === 'Paper') {
        return tie()
      } else if (computerSelection === 'Scissors'){
        return lose()
      } else if (computerSelection === 'Rock') {
        return win()
      }
    }


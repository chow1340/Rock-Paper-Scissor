
/* text contents for best of 5:*/
function tie() {
  var roundCounter = document.querySelector('.roundCounter');
  var tie = document.createElement('p');
  tie.classList.add('tie')
  tie.textContent = ('Tie' + ' '+' ');
  roundCounter.appendChild(tie);
}

function win(){
  var roundCounter = document.querySelector('.roundCounter');
  var win = document.createElement('p');
  win.classList.add('win')
  win.textContent = ('win'+ ' ');
  roundCounter.appendChild(win);
}

function lose(){
  var roundCounter = document.querySelector('.roundCounter');
  var lose = document.createElement('p');
  lose.classList.add('lose');
  lose.textContent = ('Lose'+ ' ');
  roundCounter.appendChild(lose);
}

//---- what did computer choose?
function output(computerSelection){
  const cpu = document.querySelector('.cpu');
  const content = document.createElement('p');
  content.classList.add('content')
  content.textContent = computerSelection;
  cpu.appendChild(content);
}

 
 

function computertest(){   
       var options = ['Rock','Paper','Scissors'] 
      var randomNum = Math.floor(Math.random()*3) // 0 , 1, 2 for rock paper scissors
        var computerChoice = options[randomNum] // assign numbers to 'options'
      return computerChoice 

      var computerSelection = computertest();
       console.log((computerSelection));
} 


//rock stuff------------------------
   

    document.getElementById("choiceRock").addEventListener("click", function(){
      displayRock();
      playRock();
      computertest();
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
   function playRock() {
          
          if (computerSelection ==='Rock') {
              tie()
          } else if (computerSelection === 'Paper'){
              alert('you lose') // Rock and Paper
            
            } else if (computerSelection === 'Scissors'){
              alert('you win!')
          }
        }
// scissor stuff----------------
    document.getElementById('choiceScissors').addEventListener('click', function(){
      
      playScissors()
      })


    function playScissors () {
      if (computerSelection === 'Scissors'){
        alert('tie')
      } else if (computerSelection === 'Rock'){
        alert('you lose')
      } else if (computerSelection === 'Paper') {
        alert( ' you win!')
      }
    }

    document.getElementById('choicePaper').addEventListener("click", function(){
      
      playPaper()
    })

// paper stuff--------------------------
    function playPaper () {
      if (computerSelection === 'Paper') {
        alert('tie')
      } else if (computerSelection === 'Scissors'){
        alert('you lose')
      } else if (computerSelection === 'Rock') {
        alert( ' you win!')
      }
    }

  
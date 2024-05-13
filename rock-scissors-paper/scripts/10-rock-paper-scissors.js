

const score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
  };

  updateScoreElements();
/*    if (!score){
    score={
      wins:0,
      losses:0,
      ties:0
    };
  }
  */
    function playGame(playerMove){
      const computerMove = pickcomputerMove();

      let result ='';
      if (playerMove ==='Scissosrs'){
        if(computerMove==='Rock'){
          result = 'You loose';
        }else if(computerMove==='Paper'){
          result = 'You win';
        }else if(computerMove==='Scissors'){
          result = 'Tie';
        }

      }else if(playerMove==='Paper'){
        if(computerMove==='Rock'){
          result = 'You win';
        }else if(computerMove==='Paper'){
          result = 'Tie';
        }else if(computerMove==='Scissors'){
          result = 'You loose';
        }
        
      }else if(playerMove==='Rock'){
        if(computerMove==='Rock'){
          result = 'Tie';
        }else if(computerMove==='Paper'){
          result = 'You loose';
        }else if(computerMove==='Scissors'){
          result = 'You win';
        } 
      }

      if (result==='You win'){
        score.wins +=1;
      }
      else if(result==='You loose'){
        score.losses +=1;
      }
      else if(result='Tie'){
        score.ties +=1;
      }
      //name,value
      localStorage.setItem('score',JSON.stringify(score));

      updateScoreElements();

      document.querySelector('.js-result')
      .innerHTML = `${result}`;

      document.querySelector('.js-moves')
      .innerHTML = `You<img src="images/${playerMove}-emoji.png" class="move-icon">
      <img src="images/${computerMove}-emoji.png" class="move-icon">computer`;

      }

    function updateScoreElements(){
      document.querySelector('.js-score')
       .innerHTML=` Wins: ${score.wins}, Losses: ${score.losses}, Ties ${score.ties}`
 
    }
    
    function pickcomputerMove(){
      const randomNumber = (Math.random());   
      let computerMove = '';
      if(randomNumber >=0 && randomNumber < 1/3){
        computerMove = 'Rock';
      }else if(randomNumber > 1/3 && randomNumber <2/3){
        computerMove ='Paper';
      }
      else if (randomNumber >=2/3 && randomNumber < 1){
        computerMove ='Scissors';
      } 
      return computerMove;
    }
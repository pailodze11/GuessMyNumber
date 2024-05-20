let rndNumber = Math.round(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;



document.querySelector(`.check`).addEventListener('click', function(){
    let guess = Number(document.querySelector('.input').value);
    console.log(guess, typeof guess );

    if(!guess){
        document.querySelector('.message').textContent = `🚫 There is no number`
    }else if(guess == rndNumber){
        document.querySelector('.message').textContent = `🎉 Correct Number`
        document.querySelector(`header`).style.backgroundColor = `green`
        document.querySelector(`main`).style.backgroundColor = `green`
        document.querySelector('.number').textContent = rndNumber;
        document.querySelector('.highScore').textContent = `🏆 HighScore : ${score}`;
        document.querySelector(`.input`).style.backgroundColor = `green`;
        document.querySelector(`.input`).style.color = `white`;

        
    }else if(guess > rndNumber){
        if(score > 1) {
        document.querySelector('.message').textContent = `📈 Too High`
        score --;
        document.querySelector('.score').textContent = `💯 Score : ${score}`;
        } else {
        document.querySelector('.message').textContent = `💣 Game Over`
        }
        
    } else if(guess < rndNumber) {
        document.querySelector('.message').textContent = `📉 Too Low`
        score --; 
        document.querySelector('.score').textContent = `💯 Score : ${score}`;
    }});


    document.querySelector('.again').addEventListener('click', function(){
        score = 20;
        rndNumber = Math.round(Math.random() * 20) ;
        document.querySelector('.score').textContent = `💯 Score : ${score}`;
        document.querySelector('.message').textContent = `Start guessing...`;
        document.querySelector('header').style.backgroundColor = 'grey'
        document.querySelector('main').style.backgroundColor = 'grey'
        document.querySelector('.input').style.backgroundColor = `grey`;
        document.querySelector(`.number`).textContent = `?`;
        document.querySelector(`.input`).value = '';
        

 
    });
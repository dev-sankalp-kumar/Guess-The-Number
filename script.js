let randomNUmber = parseInt(Math.random() * 100 + 1);

console.log(randomNUmber);

const params = new URLSearchParams(window.location.search);
const mode = params.get('mode');



const userInput = document.getElementById('guessField');
const submitBtn = document.getElementById('submit');
const message = document.querySelector('.msg')
const guessArray = document.querySelector('.guessArray')
const result = document.querySelector('.messsageContainer')
const remaining = document.querySelector('.remaining')
const attemptsText = document.querySelector('.attempts');
const hint = document.querySelector('.icons');
const hintMsg = document.querySelector('.hint-msg');

hint.addEventListener("click", ()=> {
    if (randomNUmber % 2 === 0){
        hintMsg.innerText = 'Your Number is Even'
    } else {
         hintMsg.innerText = 'Your Number is Odd'
    }
})




let previousGuess = []

const button = document.createElement('button')

let attempt;

if (mode === 'easy') {
    attempt = 20;
}
else if (mode === 'medium') {
    attempt = 10;
}
else if (mode === 'hard') {
    attempt = 5;
}
else {
    attempt = 10;
}


let playGame = true


attemptsText.innerHTML = `You have ${attempt} attempts`;
remaining.innerHTML = `Remaining Attempts: ${attempt}`;


if (playGame === true) {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let guess = userInput.value;
        if (guess < 1) {
            alert('Please enter a number more than 0')
        }
        else if (guess > 100) {
            alert('Please enter a number less than 100')
        } else {
            if (guess < randomNUmber) {
                message.innerHTML = `Number is too low, Guess Again`

            } else if (guess > randomNUmber) {
                message.innerHTML = `Number is too high, Guess Again`
            } else {
                message.innerHTML = ` Yah! You Guessed it right`
                endGame();
            }


            previousGuess.push(guess)
            displayGuess();
            attempt--
            remaining.innerHTML = `Remaining Attempts: ${attempt}`
        }

        userInput.value = ''

        if (attempt === 0) {
            message.innerHTML = `Game Over! The number was ${randomNUmber}`
            playGame = false
            endGame()
        }



    })

}


function displayGuess() {
    guessArray.innerHTML = `Your Guesses: ${previousGuess} `

}

function endGame() {
    userInput.setAttribute('disabled', '')
    submitBtn.setAttribute('disabled', '')
    result.appendChild(button)
    button.innerHTML = `Start New Game`
    button.style.backgroundColor = "#4338CA"
    button.style.color = "white"
    button.style.cursor = "pointer"
    submitBtn.style.cursor = "default"

    startGame()

}


function startGame() {
    button.addEventListener('click', (e) => {
        randomNUmber = parseInt(Math.random() * 100 + 1);


        if (mode === 'easy') {
            attempt = 20;
        }
        else if (mode === 'medium') {
            attempt = 10;
        }
        else {
            attempt = 5;
        }


        
        remaining.innerHTML = `Remaining Attempts: ${attempt}`
        userInput.removeAttribute('disabled', '')
        submitBtn.removeAttribute('disabled', '')
        submitBtn.style.cursor = "pointer"
        button.remove()
        guessArray.innerHTML = ''
        message.innerHTML = ''
        previousGuess = []

    }
    )
}
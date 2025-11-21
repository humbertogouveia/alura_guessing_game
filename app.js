alert('Welcome to the Guessing game!')

let userGuess = Number(prompt('Input a number between 1 and 100'))
let secretNumber = Math.round(Math.random() * 100)
let userAttempts = 1

while(isNaN(userGuess)) {
    alert('Please type a valid number')
    userGuess = Number(prompt('Input a number between 1 and 100'))
}

while(userGuess !== secretNumber) {
    userGuess > secretNumber
        ? alert(`The secret number is lower than ${userGuess}`)
        : alert(`The secret number is higher than ${userGuess} `)

        userAttempts++
        
    userGuess = Number(prompt('Input a number between 1 and 100'))
}
let attemptOrAttemptsWord = userAttempts > 1 ? 'attempts':'attempt'

alert(`Congratulations! The secret number is ${secretNumber}! You guess it with ${userAttempts} ${attemptOrAttemptsWord}`)
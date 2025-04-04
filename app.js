let userScore = 0
let compScore = 0

// To select the elements for choices and messages

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


// Function to generate the computer's choice (It randomly selects one from either rock, paper or scissor)
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"] // List of options
  const randIdx = Math.floor(Math.random() * 3) // Get a random index from the options
  return options[randIdx] // Return the randomly chosen option
}

// Function to handle a draw (when both choices are the same)
const drawGame = () => {
  msg.innerText = "Game was Draw. Play again." // Show message for draw
  msg.style.backgroundColor = "#081b31" // Set background color for draw
}

// Function to display the winner message based on who won
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++ // Increment user score
    userScorePara.innerText = userScore // Update user score display
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}` // Show win message
    msg.style.backgroundColor = "green" // Set background color to green (win)
  } else {
    compScore++ // Increment computer score
    compScorePara.innerText = compScore // Update computer score display
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}` // Show loss message
    msg.style.backgroundColor = "red" // Set background color to red (loss)
  }
}

// Function to handle the game logic
const playGame = (userChoice) => {
  // Generate the computer's choice
  const compChoice = genCompChoice()

  if (userChoice === compChoice) {
    // If it's a draw (both choices are the same)
    drawGame()
  } else {
    let userWin = true
    if (userChoice === "rock") {
      // If user chooses "rock"
      userWin = compChoice === "paper" ? false : true // Paper beats rock, so user loses in that case
    } else if (userChoice === "paper") {
      // If user chooses "paper"
      userWin = compChoice === "scissors" ? false : true // Scissors beats paper, so user loses in that case
    } else {
      // If user chooses "scissors"
      userWin = compChoice === "rock" ? false : true // Rock beats scissors, so user loses in that case
    }
    // Show the winner based on who won
    showWinner(userWin, userChoice, compChoice)
  }
}

// Add event listeners to each choice button
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id") // Get the id (choice) of the clicked button
    playGame(userChoice) // Call the playGame function with the user's choice
  })
})

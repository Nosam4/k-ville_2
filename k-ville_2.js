let secretPlayer = null;

// Pick a secret player at random
function pickSecretPlayer() {
  // Get the player list dropdown element
  const playerList = document.getElementById("player-list");

  // Get a random index for selecting a player
  const playerIndex = Math.floor(Math.random() * playerList.options.length);

  // Get the selected player's attributes
  const selectedPlayer = playerList.options[playerIndex];
  const name = selectedPlayer.value;
  const decade = selectedPlayer.getAttribute("data-decade");
  const start = selectedPlayer.getAttribute("data-start");
  const years = selectedPlayer.getAttribute("data-years");
  const position = selectedPlayer.getAttribute("data-position");
  const height = selectedPlayer.getAttribute("data-height");
  const number = selectedPlayer.getAttribute("data-number");

  // Set the selected player as the secret player
  secretPlayer = { name, decade, start, years, position, height, number };
}

// Call the pickSecretPlayer() function to set the initial secret player
pickSecretPlayer();
////////
document.getElementById("guess-button").addEventListener("click", function() {
  updateTable();
});
////////

function updateTable() {
  // Get the selected player option from the dropdown menu
  const selectedOption = document.getElementById("player-list").value;

  // Get the player row that needs to be updated
  let rowNumber = 0;
  for (let i = 1; i <= 6; i++) {
    if (!document.querySelector(`#guess-row-${i} .player-${i}`).innerHTML) {
      rowNumber = i;
      break;
    }
  }

  // Update the table with the selected player's attributes
  const selectedPlayer = document.querySelector(
    `option[value="${selectedOption}"]`
  );
  document.querySelector(`#guess-row-${rowNumber} .player-${rowNumber}`).innerHTML =
    selectedPlayer.value;
  document.querySelector(`#guess-row-${rowNumber} .decade-${rowNumber}`).innerHTML =
    selectedPlayer.getAttribute("data-decade");
  document.querySelector(`#guess-row-${rowNumber} .first-year-${rowNumber}`).innerHTML =
    selectedPlayer.getAttribute("data-start");
  document.querySelector(`#guess-row-${rowNumber} .num-years-${rowNumber}`).innerHTML =
    selectedPlayer.getAttribute("data-years");
  document.querySelector(`#guess-row-${rowNumber} .position-${rowNumber}`).innerHTML =
    selectedPlayer.getAttribute("data-position");
  document.querySelector(`#guess-row-${rowNumber} .height-${rowNumber}`).innerHTML =
    selectedPlayer.getAttribute("data-height");
  document.querySelector(`#guess-row-${rowNumber} .number-${rowNumber}`).innerHTML =
    selectedPlayer.getAttribute("data-number");

  // Check if the selected player matches the secret player
  if (selectedPlayer.value === secretPlayer.name) {
    document.querySelector(`#guess-row-${rowNumber}`).classList.add("guessed");
    document.getElementById("player-list").disabled = true;
     document.getElementById("guess-button").disabled = true;// Disable the dropdown
  }

 // Check if the selected player's decade matches with the secret player's decade
if (selectedPlayer.getAttribute("data-decade") === secretPlayer.decade) {
  document.querySelector(`#guess-row-${rowNumber} .decade-${rowNumber}`).classList.add("matched");
} else if (Math.abs(selectedPlayer.getAttribute("data-decade") - secretPlayer.decade) <= 10) {
  document.querySelector(`#guess-row-${rowNumber} .decade-${rowNumber}`).classList.add("close");
}

// Check if the selected player's start year matches with the secret player's start year
if (selectedPlayer.getAttribute("data-start") === secretPlayer.start) {
  document.querySelector(`#guess-row-${rowNumber} .first-year-${rowNumber}`).classList.add("matched");
} else if (Math.abs(selectedPlayer.getAttribute("data-start") - secretPlayer.start) <= 2) {
  document.querySelector(`#guess-row-${rowNumber} .first-year-${rowNumber}`).classList.add("close");
}

// Check if the selected player's number of years matches with the secret player's number of years
if (selectedPlayer.getAttribute("data-years") === secretPlayer.years) {
  document.querySelector(`#guess-row-${rowNumber} .num-years-${rowNumber}`).classList.add("matched");
}else if (Math.abs(selectedPlayer.getAttribute("data-years") - secretPlayer.years) <= 2) {
  document.querySelector(`#guess-row-${rowNumber} .num-years-${rowNumber}`).classList.add("close");
}

// Check if the selected player's position matches with the secret player's position
if (selectedPlayer.getAttribute("data-position") === secretPlayer.position) {
  document.querySelector(`#guess-row-${rowNumber} .position-${rowNumber}`).classList.add("matched");
}

// Check if the selected player's height matches with the secret player's height
if (selectedPlayer.getAttribute("data-height") === secretPlayer.height) {
  document.querySelector(`#guess-row-${rowNumber} .height-${rowNumber}`).classList.add("matched");
} else if (Math.abs(selectedPlayer.getAttribute("data-height") - secretPlayer.height) <= 2) {
  document.querySelector(`#guess-row-${rowNumber} .height-${rowNumber}`).classList.add("close");
} else if (Math.abs(selectedPlayer.getAttribute("data-height") - secretPlayer.height) >= 89 && Math.abs(selectedPlayer.getAttribute("data-height") - secretPlayer.height) <= 90) {
  document.querySelector(`#guess-row-${rowNumber} .height-${rowNumber}`).classList.add("close");
}

// Check if the selected player's number matches with the secret player's number
if (selectedPlayer.getAttribute("data-number") === secretPlayer.number) {
  document.querySelector(`#guess-row-${rowNumber} .number-${rowNumber}`).classList.add("matched");
} else if (Math.abs(selectedPlayer.getAttribute("data-number") - secretPlayer.number) <= 2) {
  document.querySelector(`#guess-row-${rowNumber} .number-${rowNumber}`).classList.add("close");
}

  // Disable the dropdown menu after 6 selections or when rowNumber is 6
  const numSelections = document.querySelectorAll(".player-6:not(:empty)").length;
  if (numSelections === 6 || rowNumber === 6) {
    document.getElementById("player-list").disabled = true;
    document.getElementById("guess-button").disabled = true;
    // Assuming that the secret player object is already defined
const secretPlayerName = document.createTextNode(secretPlayer.name);
const secretPlayerNameContainer = document.getElementById("secret-player-name");
secretPlayerNameContainer.appendChild(secretPlayerName);
  }
}

/////////
// Reset the game
function resetGame() {
  // Reset the secret player
  pickSecretPlayer();

  // Clear all player guesses
  for (let i = 1; i <= 6; i++) {
    document.querySelector(`#guess-row-${i} .player-${i}`).innerHTML = "";
    document.querySelector(`#guess-row-${i} .decade-${i}`).innerHTML = "";
    document.querySelector(`#guess-row-${i} .first-year-${i}`).innerHTML = "";
    document.querySelector(`#guess-row-${i} .num-years-${i}`).innerHTML = "";
    document.querySelector(`#guess-row-${i} .position-${i}`).innerHTML = "";
    document.querySelector(`#guess-row-${i} .height-${i}`).innerHTML = "";
    document.querySelector(`#guess-row-${i} .number-${i}`).innerHTML = "";
    document.querySelector(`#guess-row-${i}`).classList.remove("guessed");
    document.querySelector(`#guess-row-${i} .decade-${i}`).classList.remove("matched");
    document.querySelector(`#guess-row-${i} .first-year-${i}`).classList.remove("matched");
    document.querySelector(`#guess-row-${i} .num-years-${i}`).classList.remove("matched");
    document.querySelector(`#guess-row-${i} .position-${i}`).classList.remove("matched");
    document.querySelector(`#guess-row-${i} .height-${i}`).classList.remove("matched");
    document.querySelector(`#guess-row-${i} .number-${i}`).classList.remove("matched");
   document.querySelector(`#guess-row-${i} .decade-${i}`).classList.remove("close");
    document.querySelector(`#guess-row-${i} .first-year-${i}`).classList.remove("close");
    document.querySelector(`#guess-row-${i} .num-years-${i}`).classList.remove("close");
    document.querySelector(`#guess-row-${i} .position-${i}`).classList.remove("close");
    document.querySelector(`#guess-row-${i} .height-${i}`).classList.remove("close");
    document.querySelector(`#guess-row-${i} .number-${i}`).classList.remove("close");
    
  }
  // Reset the dropdown and enable it
  const playerList = document.getElementById("player-list");
  playerList.selectedIndex = 0;
  playerList.disabled = false;
  
 const guessButton = document.getElementById("guess-button");
  guessButton.selectedIndex = 0;
  guessButton.disabled = false;

  // Clear the secret player name
  const secretPlayerNameContainer = document.getElementById("secret-player-name");
  secretPlayerNameContainer.innerHTML = "";

}

// Call the resetGame() function when the "Reset" button is clicked
document.getElementById("reset-button").addEventListener("click", resetGame);



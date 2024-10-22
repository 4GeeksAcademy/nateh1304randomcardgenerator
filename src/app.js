/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", () => {
  const centerSymbol = document.querySelector(".center-symbol");
  const topLeftSymbol = document.querySelector(".top-left-symbol");
  const bottomRightSymbol = document.querySelector(".bottom-right-symbol");
  const refreshButton = document.querySelector("#refresh-button");

  // Array of values to switch for the center (3, 8, J)
  const centerValues = ["3", "8", "J"];

  // Array of symbols for the top-left and bottom-right (♠, ♣, ♥)
  const suitSymbols = ["♠", "♣", "♥"];

  // Function to switch the center symbol
  function switchCenterSymbol() {
    const centerIndex = Math.floor(Math.random() * centerValues.length); // Random index
    centerSymbol.textContent = centerValues[centerIndex];
  }

  // Function to switch the suit symbols
  function switchSuitSymbols() {
    const suitIndex = Math.floor(Math.random() * suitSymbols.length); // Random index
    const selectedSymbol = suitSymbols[suitIndex];

    // Set suit symbols for both top-left and bottom-right
    topLeftSymbol.textContent = selectedSymbol;
    bottomRightSymbol.textContent = selectedSymbol;

    // Change color to red if it’s a heart (♥), otherwise black
    if ((selectedSymbol === "♥", "♦")) {
      topLeftSymbol.style.color = "red";
      bottomRightSymbol.style.color = "red";
    } else {
      topLeftSymbol.style.color = "black";
      bottomRightSymbol.style.color = "black";
    }
  }

  // Function to refresh both center and suit symbols
  function refreshCard() {
    switchCenterSymbol();
    switchSuitSymbols();
  }

  // Add an event listener to the button for refreshing the card
  refreshButton.addEventListener("click", () => {
    refreshCard();
  });

  // Initialize with random symbols and values on page load
  refreshCard();

  refreshCard();
});

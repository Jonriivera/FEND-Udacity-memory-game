/*
 * Create a list that holds all of your cards
 */
let listOfCards = [ // cards array for
  'fa-diamond',
  'fa-diamond',
  'fa-paper-plane-o',
  'fa-paper-plane-o',
  'fa-anchor',
  'fa-anchor',
  'fa-bolt',
  'fa-bolt',
  'fa-cube',
  'fa-cube',
  'fa-bicycle',
  'fa-bicycle',
  'fa-bomb',
  'fa-bomb',
  'fa-leaf',
  'fa-leaf',
  ];

function createCards() { //function to shuffle cards and append to the deck.
  let deck = document.querySelector('.deck');
  listOfCards = shuffle(listOfCards);
  for(let i = 0 ; i < listOfCards.length ; i++) {
    let HTMLToAdd = '<li class="card"><i class="fa ' +listOfCards[i]+ '"></i></li>';
    deck.insertAdjacentHTML('beforeend', HTMLToAdd);
  }
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let card = document.querySelectorAll('.card');

function showCard() { //Funtion to show card
  event.target.className += ' open show';
}

let cardsOpen = []; // array for cards flipped to be placed into.

function matchedCards() { // function to add what matched cards do

}

function unmatchedCards() { // function to add what unmatched cards do

}

function testCards() { // Function to add cards to array and to compare them
  let opened = event.target.innerHTML;
  cardsOpen.push(opened);
  if(cardsOpen.length === 2) {
    if(cardsOpen[0] == cardsOpen[1]){
      matchedCards();
    } else {
      unmatchedCards();
    }
  }
}

document.addEventListener("click", function(event) { // Event listener for click on card
  if(event.target && event.target.className === "card"){
  showCard();
  testCards();
  }
});

createCards();
/*

 * [done] set up the event listener for a card. If a card is clicked:
 *  [done]- display the card's symbol (put this functionality in another function that you call from this one)
 *  - [done] add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

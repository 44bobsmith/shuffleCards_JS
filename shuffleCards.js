$(document).ready(function() {

function card(value) {

  this.inDeck = true;

  this.changeFaceValue = function (value) {
    switch (value) {
      case 1:
      case 14:
      case 27:
      case 40:
        return 'ace';
      case 11:
      case 24:
      case 37:
      case 50:
        return 'jack';
      case 12:
      case 25:
      case 38:
      case 51:
        return 'queen';
      case 13:
      case 26:
      case 39:
      case 52:
        return 'king';
      default:
        if (value <= 13) {
          return (value).toString();
        } else if (value <= 26) {
          return (value - 13).toString();
        } else if (value <= 39) {
          return (value - 26).toString();
        } else {
          return (value -39).toString();
        }

    }
  };

  this.faceValue = this.changeFaceValue(value);

  this.aceCheck = function (value) {
    if (value % 13 === 0) {
      return true;
    } else {
      return false;
    }
  };

  this.ace = this.aceCheck(value);

  this.changeSuit = function (value) {
    if (value <= 13) {
      return 'HEARTS';
    } else if (value <= 26) {
      return 'DIAMONDS';
    } else if (value <= 39) {
      return 'SPADES';
    } else {
      return 'CLUBS';
    }
  };

  this.suit = this.changeSuit(value);

  this.setCardValue = function(value) {
    switch (value) {
      case 1:
      case 14:
      case 27:
      case 40:
        return 11;
      case 11:
      case 12:
      case 13:
      case 24:
      case 25:
      case 26:
      case 37:
      case 38:
      case 39:
      case 50:
      case 51:
      case 52:
        return 10;
      default:
        return parseInt(this.faceValue);
      }
    };

  this.cardValue = this.setCardValue(value);

  }


var newDeck = [];

//creates a new deck in order. 0 index hold # of cards in deck
function createNewDeck() {
  newDeck[0] = 0;
  for (var j = 1; j <= 52; j++){
    newDeck[j] = new card (j);
    newDeck[0] += 1;
  }
}


var shuffledDeck = [];
shuffledDeck[0] = 0;

//creates a new deck and then shuffles it.
function shuffle() {
  createNewDeck();
    while (newDeck[0]>0 && shuffledDeck[0]<=52) {
    var cardPicker = Math.floor(Math.random() * 52) + 1;
    console.log(cardPicker);
    if (newDeck[cardPicker].inDeck) {
      console.log(newDeck[cardPicker]);
      shuffledDeck.push(newDeck[cardPicker]);
      console.log(shuffledDeck);
      newDeck[cardPicker].inDeck = false;
      newDeck[0] -= 1;
      shuffledDeck[0] += 1;
    }
  }
}

//shuffle and deal for high card

var player = [];
var dealer = [];

function dealFirstCard() {
  shuffle();
  console.log(shuffledDeck[0]);
  player[0]=shuffledDeck[1];
  shuffledDeck.splice(1,1);
  dealer[0]=shuffledDeck[1];
  shuffledDeck.splice(1,1);
  shuffledDeck[0] = shuffledDeck.length - 1;
  console.log(shuffledDeck[0]);

}




//generates a new deck in using the #freshDeck button
$('#freshDeck').click (function() {
  createNewDeck();
  $('#testArea').append(newDeck[0] + '<br>');
  for (var i=1; i <=52; i++) {
      $('#testArea').append(i + ': ' + newDeck[i].faceValue + ' of ' + newDeck[i].suit + '(' + newDeck[i].cardValue + ')' + '<br>');
    }
});

//generates a shuffled deck when #shuffle button is pressed
  $('#shuffle').click (function() {
    shuffle();
    for (var i=1; i <=52; i++) {
        $('#testArea').append(i + ': ' + shuffledDeck[i].faceValue + ' of ' + shuffledDeck[i].suit + '(' + shuffledDeck[i].cardValue + ')' + '<br>');
      }
    });


//run dealFirstCard function and display results
$('#highCard').click (function() {
    $('#playerHand').empty();
    $('#dealerHand').empty();
    $('#result').empty();
    dealFirstCard();
    $('#playerHand').append(player[0].faceValue + ' of ' + player[0].suit);
    $('#dealerHand').append(dealer[0].faceValue + ' of ' + dealer[0].suit);
    if (player[0].cardValue > dealer[0].cardValue) {
      $('#result').append('YOU Win!');
    } else if (player[0].cardValue < dealer[0].cardValue) {
      $('#result').append('Dealer Wins. Better luck next time.');
    } else {
      $('#result').append("It's a tie!");
    }
    });

});

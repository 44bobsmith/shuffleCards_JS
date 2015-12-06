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
      case 23:
      case 24:
      case 25:
      case 36:
      case 37:
      case 38:
      case 49:
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


var newDeck = new Array();
newDeck[0] = 52;

for (var j = 1; j <= 52; j++){
  newDeck[j] = new card (j);
}


var shuffledDeck = new Array();
shuffledDeck[0] = 0;

function shuffle() {
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

  $('#shuffle').click (function() {
    shuffle();
    for (var i=1; i <=52; i++) {
    $('#output').append(i + ': ' + shuffledDeck[i].faceValue + ' of ' + shuffledDeck[i].suit + '<br>');
  }
    });


});

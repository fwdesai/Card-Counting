const values = [
		{value: "2", count: 1},
		{value: "3", count: 1},
		{value: "4", count: 1},	
		{value: "5", count: 1},
		{value: "6", count: 1},
		{value: "7", count: 0},
		{value: "8", count: 0},
		{value: "9", count: 0},
		{value: "10", count: -1},
		{value: "jack", count: -1},
		{value: "queen", count: -1},
		{value: "king", count: -1},
		{value: "ace", count: -1}
];

const suits = ["♠", "♥", "♦", "♣"];

const cards = [];

suits.forEach(suit => {
  values.forEach(card => {
    cards.push({
      value: card.value,
      suit: suit,
      count: card.count,
      img: `images/${card.value}_of_${getSuitName(suit)}.png`,
	  seen: false
    });
  });
});

function getSuitName(suit) {
  switch (suit) {
    case "♠": return "spades";
    case "♥": return "hearts";
    case "♦": return "diamonds";
    case "♣": return "clubs";
  }
}

document.getElementById("card-display").textContent = "Press 'Draw Card' to start";

let count = 0;
let isHidden = false;
let numSeen = 0;
let finished = false;
let autoDrawing = false;

function checkNumSeen() {
	if (numSeen >= 52) {
		alert("All cards have been drawn. Resetting...");
		document.getElementById("reset").click();
		finished = true;
		autoDrawing = false;
		return true;
	}
	return false;
}

function drawCard() {
	document.getElementById("draw-card").click();
}

document.getElementById("draw-card").addEventListener("click", function () {
		if(checkNumSeen()) {
			return;
		}

		let randomCard = cards[Math.floor(Math.random() * cards.length)];

		while ((numSeen < 53) && (randomCard.seen == true)) {
			randomCard = cards[Math.floor(Math.random() * cards.length)];
		}

		numSeen++;
		let cardImage = document.getElementById("card-image");
		cardImage.src = randomCard.img;
		cardImage.alt = `${randomCard.value} ${randomCard.suit}`;
		randomCard.seen = true;

		count += randomCard.count;
		document.getElementById("count").textContent = count;
		document.getElementById("card-display").textContent = "";
});

document.getElementById("auto-draw").addEventListener("click", function() {
	 if (autoDrawing) {
		return;
	 } else {
		autoDrawing = true;
		while(!finished) {
			setTimeout(drawCard, 2000);
		}
	 }
});

document.getElementById("reset").addEventListener("click", function () {
		count = 0;
		numSeen = 0;
		document.getElementById("count").textContent = count;
		document.getElementById("card-display").textContent = "Press 'Draw Card' to start";
		cards.forEach(card => {
				card.seen = false;
		});
});

document.getElementById("hide_count").addEventListener("click", function () {
		if (!isHidden) {
			document.getElementById("count").style.visibility = "hidden";	
			isHidden = true;
		} else {
			document.getElementById("count").style.visibility = "visible";
			document.getElementById("count").textContent = count;
			isHidden = false;
		}
});


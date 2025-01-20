const cards = [
		{value: "2", suit: "♠", count: 1},
		{value: "3", suit: "♠", count: 1},
		{value: "4", suit: "♠", count: 1},	
		{value: "5", suit: "♠", count: 1},
		{value: "6", suit: "♠", count: 1},
		{value: "7", suit: "♠", count: 0},
		{value: "8", suit: "♠", count: 0},
		{value: "9", suit: "♠", count: 0},
		{value: "10", suit: "♠", count: -1},
		{value: "J", suit: "♠", count: -1},
		{value: "Q", suit: "♠", count: -1},
		{value: "K", suit: "♠", count: -1},
		{value: "A", suit: "♠", count: -1}
];

let count = 0;
let isHidden = false;

document.getElementById("draw-card").addEventListener("click", function () {
		let randomCard = cards[Math.floor(Math.random() * cards.length)];
		document.getElementById("card-display").textContent = `${randomCard.value} ${randomCard.suit}`;
		count += randomCard.count;
		document.getElementById("count").textContent = count;
});

document.getElementById("reset").addEventListener("click", function () {
		count = 0;
		document.getElementById("card-display").textContent = "Press 'Draw Card' to start";
		document.getElementById("count").textContent = count;
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


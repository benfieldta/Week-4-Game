$(document).ready(function() {

	var guessNumber = Math.floor(Math.random()*(120-19)+19);
	var crystalTotals = [];
	var wins = 0;
	var losses = 0;
	var crystals = ["assets/images/gem1.png", "assets/images/gem2.png", "assets/images/gem3.png", "assets/images/gem4.png"]

	function crystalGame() {

		for (var i = 0; i < 4; i++) {
			var randomize = Math.floor(Math.random() * 12 + 1);
			crystalTotals.push(randomize)
		}

		console.log(crystalTotals)

		for (var i = 0; i < crystalTotals.length; i++) {
			var crystalSelect = $("<img>");
			crystalSelect.attr("data-num", crystalTotals[i]);
			crystalSelect.attr("src", crystals[i]);
			crystalSelect.addClass("crystalsImg");
			$("#crystals").append(crystalSelect);
		}
	}

	function reset() {

		crystalTotals = [];

		var counter = 0;
		$("#currentTotal").text(counter);

		var guessNumber = Math.floor(Math.random() * (120 - 19) + 19);
		$("#guessNumber").text(guessNumber);

		$(".crystalsImg").on("click", function(){
			counter += parseInt($(this).data("num"));

			$("#currentTotal").text(counter);

			if (counter == guessNumber) {
				console.log("win");
				wins++;
				$("#wins").text(wins);
				$("#crystals").empty();
				crystalGame();
				reset();
			}

			else if (counter > guessNumber) {
				console.log("loss");
				losses++;
				$("#losses").text(losses);
				$("#crystals").empty();
				crystalGame();
				reset();
			}

		});

	}

crystalGame();
reset();

});


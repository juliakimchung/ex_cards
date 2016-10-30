var output = document.getElementById("create");
var deleteOutput = document.getElementById("delete");
var cardInput = document.getElementsByClassName("newCard");
var inputText = document.getElementById("inputText");

	
output.addEventListener("click", function createCards() {
	for( var i =0; i < cardInput.length; i++)

	 cardInput[i].classList.toggle("card-appear");
});

deleteOutput.addEventListener("click", function deleteCards() {
	for( var i =0; i < cardInput.length; i++)

		cardInput[i].classList.toggle("card-disappear");
});

inputText.addEventListener("keypress", function(event) {
	inputText.innerHTML = event.target.value;

});

deleteOutput.addEventListener("click", function reset() {
	inputText.value = " ";
})
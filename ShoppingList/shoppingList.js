var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function checkKeyAndAppend(pressedKey) {
	if (pressedKey.keyCode === 13){
		appendValue();
	}
}

function appendValue() {
	if (input.value.length > 0){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value)); //attached testing to li element
		ul.appendChild(li);
		input.value = "";
	}
}

button.addEventListener("click", appendValue);
input.addEventListener("keypress", checkKeyAndAppend);

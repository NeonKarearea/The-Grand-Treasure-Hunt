function microcheck() {
	var ans = document.getElementById("answer").value;
	if (ans === "alice") {
		window.location.href = "alice.html";
	} else if (ans === "mad hatter") {
		window.location.href = "mad hatter.html";
	} else {
		alert("Incorrect. Note: Answer is Case Sensitive");
	}
}

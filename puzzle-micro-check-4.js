function microcheck() {
	var ans = document.getElementById("answer").value;
	if (ans === "alice") {
		window.location.href = "https://www.youtube.com";
	} else if (ans === "mad hatter") {
		window.location.href = "https://www.twitter.com";
	} else {
		alert("Incorrect. Note: Answer is Case Sensitive");
	}
}
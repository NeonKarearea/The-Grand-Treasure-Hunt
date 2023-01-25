function check() {
	var ans = document.getElementById("answer").value;
	if (ans === "conquered") {
		alert("Correct");
	} else {
		alert("Incorrect. Note: Answer is Case Sensitive");
	}
}
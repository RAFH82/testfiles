function confirmEnding(str, target) {
	let slice = str.substr(str.length - target.length, target.length);
	if (slice === target) {
		return true;
	} else {
		return false;
	}
}

console.log(confirmEnding("Open sesame", "sesame"));

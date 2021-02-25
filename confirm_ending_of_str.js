function confirmEnding(str, target) {
	return str.substr(-target.length) === target;
}

console.log(confirmEnding("Open sesame", "sesame"));

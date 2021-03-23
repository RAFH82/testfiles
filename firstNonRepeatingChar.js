// function firstNonRepeatedCharacter(string) {
// 	for (let i = 0; i < string.length; i++) {
// 		// iterate through the string
// 		let letter = string.charAt(i);
// 		// assign the first letter to a variable

// 		// if the index of that letter  equals the current index, is not found again in the string, starting at the next index in the string (i + 1),
// 		// return that letter, as indexOf will return -1 if the string does not contain that letter.
// 		if (string.indexOf(letter) == i && string.indexOf(letter, i + 1) == -1) {
// 			return letter;
// 		}
// 	}
// 	return null;
// }

function firstNonRepeatedCharacters(string) {
	// let result = []
	for (let i = 0; i < string.length; i++) {
		if (string.lastIndexOf(string[i]) == string.indexOf(string[i])) {
			// result.push(string[i])
			return string[i];
		}
	}
	// or return result array
	return null;
}

let someString = "aabcbd";

// console.log(firstNonRepeatedCharacter(someString));
console.log(firstNonRepeatedCharacters(someString));

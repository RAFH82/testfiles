let inputNamesArray = [
	"Dench, Judy",
	"Mirren, Helen",
	"Andrews, Julie",
	"Jolie, Angelina",
];

// Regex Version
const dameItUp = (arr) => {
	let outputNamesArray = [];
	// loop through each element in the array
	for (let name of arr) {
		// create regEx literal
		let re = /(\w+)\s(\w+)/;
		// remove comma in the string, and swap first name with the last
		let temp = "Dame " + name.replace(/,/g, "").replace(re, "$2 $1");
		// push the modified string to the output array
		outputNamesArray.push(temp);
	}
	return outputNamesArray;
};

console.log(dameItUp(inputNamesArray));
// [ 'Dame Judy Dench',
//   'Dame Helen Mirren',
//   'Dame Julie Andrews',
//   'Dame Angelina Jolie' ]

// Splice / Slice version
const updateNames = (array) => {
	let outputNamesArray = [];
	for (const name of array) {
		// loop through the array, and for each name, split them at the comma, but this returns an array, so slice off the 1st
		// element of that array (first name), and then return the 0 element (which is a string, and the last name)
		// then add space, followed by the first name (now just element 0 when not using slice) and prepend Dame in front of it.comment
		// and then push this to the output array.
		outputNamesArray.push(
			"Dame " + name.split(", ").slice(1)[0] + " " + name.split(",")[0]
		);
	}
	return outputNamesArray;
};
console.log(updateNames(inputNamesArray));

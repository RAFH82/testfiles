function largestOfFour(arr) {
	let largest = [-Infinity, -Infinity, -Infinity, -Infinity];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] > largest[i]) {
				largest[i] = arr[i][j];
			}
		}
	}
	return largest;
}

largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1],
]);

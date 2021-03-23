function largestAndSmallest(array) {
	let largest = -Infinity;
	let smallest = Infinity;
	for (let i = 0; i < array.length; i++) {
		if (array[i] > largest) {
			largest = array[i];
		}
	}
	for (let i = 0; i < array.length; i++) {
		if (array[i] < smallest) {
			smallest = array[i];
		}
	}
	console.log(smallest, largest);
}

const array = [
	33,
	55,
	99,
	37,
	34,
	346,
	2423,
	63,
	546756,
	456462,
	3453453,
	675756,
	2352,
	78,
	34,
];

largestAndSmallest(array);

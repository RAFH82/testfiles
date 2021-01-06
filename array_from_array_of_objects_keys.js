const testArr = [
	{ a: 1, b: 2 },
	{ c: 3, d: 4 },
	{ e: 5, f: 6 },
	{ a: 2, c: 3 },
];

// first way
const arrFromObjKeys1 = (arr) => {
	const result = [];
	for (let obj of arr) {
		for (let key in obj) {
			if (!result.includes(key)) {
				result.push(key);
			}
		}
	}
	return result;
};

// second way
const arrFromObjKeys2 = (arr) => {
	const result = [];
	for (let obj of arr) {
		for (let key in obj) {
			result.push(key);
		}
	}
	let uniqueArr = [...new Set(result)];
	return uniqueArr;
};

console.log(arrFromObjKeys1(testArr));

console.log(arrFromObjKeys2(testArr));

// prints [ 'a', 'b', 'c', 'd', 'e', 'f' ]

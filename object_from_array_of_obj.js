const testArr = [
	{ a: 1, b: 2 },
	{ c: 3, d: 4 },
	{ e: 5, f: 6 },
];

// first way
const arrToObj1 = (arr) => {
	let result = {};
	for (let obj of arr) {
		result = { ...result, ...obj };
	}
	return result;
};

// second way
const arrToObj2 = (arr) => {
	let result = {};
	for (let obj of arr) {
		Object.assign(result, obj);
	}
	return result;
};

console.log(arrToObj1(testArr));
console.log(arrToObj2(testArr));
// results in { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

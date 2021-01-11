const testArr1 = [
	{ a: 1, b: 2 },
	{ c: 3, d: 4 },
	{ e: 5, f: 6 },
	{ a: 7, b: 8 },
];

const emptyArr = [];

// Array of Object keys from Array of Objects
const objKeysToArr = (arr) => {
	if (Array.isArray(arr) && arr.length > 0) {
		const result = [];
		for (let obj of arr) {
			for (let key in obj) {
				if (!result.includes(key)) {
					result.push(key);
				}
			}
		}
		return result;
	} else {
		return `Must be valid input`;
	}
};

console.log(objKeysToArr(testArr1));
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(objKeysToArr(emptyArr));
// Must be valid input
const testObj1 = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	f: 6,
};

const testObj = [];

// Array from object keys
const objToArr = (obj) => {
	if (typeof obj === "object" && !Array.isArray(obj)) {
		const result = [];
		for (let key in obj) {
			result.push(key);
		}
		return result;
	} else {
		return `Must be valid input`;
	}
};

console.log(objToArr(testObj1));
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(objToArr(testObj));
// Must be valid input

const objArr = [
	{ a: 1, b: 2 },
	{ c: 3, d: 4 },
	{ e: 5, f: 6 },
];

const objFromArr = (arr) => {
	if (Array.isArray(arr) && arr.length > 0) {
		result = {};
		for (let obj of arr) {
			if (typeof obj === "object") {
				result = { ...result, ...obj };
			} else {
				return `Must be an array of obj`;
			}
		}
		return result;
	} else {
		return `Must be valid input`;
	}
};

console.log(objFromArr(objArr));
// { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

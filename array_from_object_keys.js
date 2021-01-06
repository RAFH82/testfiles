const testObj = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	f: 6,
};

// array of object's keys
const arrFromObjKeys1 = (obj) => {
	const result = [];
	for (let key in obj) {
		result.push(key);
	}
	return result;
};

// Array of object's key's values
const arrFromObjValues1 = (obj) => {
	const result = [];
	for (let key in obj) {
		result.push(obj[key]);
	}
	return result;
};

// Array of objects with the objects key/value pairs
const arrOfObjectsKeyValues = (obj) => {
	const result = [];
	for (let key in obj) {
		result.push({ [key]: obj[key] });
	}
	return result;
};

console.log(arrFromObjKeys1(testObj));
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]

console.log(arrFromObjValues1(testObj));
// [ 1, 2, 3, 4, 5, 6 ]

console.log(arrOfObjectsKeyValues(testObj));
// [ { a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }, { f: 6 } ]

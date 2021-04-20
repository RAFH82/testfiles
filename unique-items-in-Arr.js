// function uniqueElements(array) {
// 	let uniques = [];

// 	for (let i = 0; i < array.length; i++) {
// 		let unique = true;
// 		for (let j = 0; j < array.length; j++) {
// 			if (i === j) {
// 				continue;
// 			}
// 			if (array[i] === array[j]) {
// 				unique = false;
// 			}
// 		}
// 		if (unique) {
// 			uniques.push(array[i]);
// 		}
// 	}

// 	return uniques;
// }

const test = [1, "w", 2, 7, 2, "w", 8, 1, "e", 44, 1];

// console.log(uniqueElements(test));

const uniques = new Set(test);

console.log(uniques);

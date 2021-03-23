const numbers = [23, 67, 22, 79, 90, 457, 2, 6, 5, 8, 22, 3, 1, 441, 3];

const sort = (list) => {
	return list.sort((a, b) => a - b);
};

console.log(sort(numbers));

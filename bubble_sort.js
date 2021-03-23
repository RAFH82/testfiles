let numbers = [1, 7, 4, 3, 8, 2, 9, 5, 6];

let sort = (list) => {
	for (let i = 0; i < list.length; i++) {
		for (let j = 0; j < list.length - i - 1; j++) {
			if (list[j] > list[j + 1]) {
				[list[j], list[j + 1]] = [list[j + 1], list[j]];
			}
		}
	}
	return list;
};

console.log(sort(numbers));

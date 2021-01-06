const addMe = (arr) => {
	return arr.reduce((acc, cur) => acc + cur, 0);
};

console.log(addMe([1, 2, 3]));

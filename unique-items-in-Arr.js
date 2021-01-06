function uniqueElements(array) {
	let uniques = [];

	for (let i = 0; i < array.length; i++) {
		let unique = true;
		for (let j = 0; j < array.length; j++) {
			if (i === j) {
				continue;
			}
			if (array[i] === array[j]) {
				unique = false;
			}
		}
		if (unique) {
			uniques.push(array[i]);
		}
	}

	return uniques;
}

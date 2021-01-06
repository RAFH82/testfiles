function arrayContainsSum(array, sum) {
  let i = 0;
  let ii = array.length - 1;

  while (i <= ii) {
    const element1 = array[i];
    const element2 = array[ii];
    const currentSum = element1 + element2;

    if (currentSum === sum) {
      return true;
    } else if (currentSum > sum) {
      ii--;
    } else {
      i++;
    }
  }

  return false;
}

console.log(arrayContainsSum([1, 3, 6, 9, 13, 17, 23, 45, 67, 89, 91], 24));


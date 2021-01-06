function largestAndSmallest(array) {
  let largest = -Infinity;
  let smallest = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  console.log(smallest, largest);
}

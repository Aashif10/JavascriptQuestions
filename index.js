function BubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
let array = [2, 4, 1, 5, 3, 6, 8, 7, 10, 9];
const result = BubbleSort(array)
console.log(result);
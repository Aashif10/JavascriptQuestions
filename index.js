// ******************************* Bubble Sort **************************************
// function BubbleSort(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length - i - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }
// let array = [2, 4, 1, 5, 3, 6, 8, 7, 10, 9];
// const result = BubbleSort(array)
// console.log(result);
// ******************************* find Target char **************************************

// function TargetChar(str, target) {
//     let count = 0;
//     for (let value of str) {
//         if (value === target) {
//             count++;
//         }
//     }
//      return count;
// }
// ******************************* Occuring char **************************************

// const result = TargetChar("aabbbbccaa", "c")
// console.log(result)

// function Occured(str) {
//     let count = {};

//     for (let char of str) {
//         count[char]=count[char]?count[char]+1:1;

//     }
//     return count;
// }
// const str = "aabbccc";
// const result = Occured(str);
// console.log(result)

// ******************************* Two Sum **************************************

// function TwoSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i+1; j < array.length; j++) {
//       if (array[i] + array[j] == target) {
//         console.log(i, j);
//       }
//     }
//     }
//     return "Executed"
// }
// const array = [19, 92, 53, 34, 5, 6, 17, 8, 39, 10];
// const target = 15;
// const result = TwoSum(array, target);
// console.log(result);

// ******************************* Two Sum **************************************

// var twoSum = function(numbers, target) {
//   for (let i = 1; i < numbers.length; i++) {
//     for (let j =i+1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         console.log(i, j);
//       }
//     }
//   }
//   return "Executed";
// };
// const numbers = [2, 7, 11, 15];
// const target = 9;
// const result = twoSum(numbers, target);
// console.log(result);
// ******************************* Two Sum **************************************

// function twoSum(numbers, target) {
//     let left = 0, right = numbers.length - 1;

//     while (left < right) {
//         const currentSum = numbers[left] + numbers[right];
//         if (currentSum === target) {
//             return [left + 1, right + 1]; // Convert to 1-based indices
//         } else if (currentSum < target) {
//             left++; // Move the left pointer to the right
//         } else {
//             right--; // Move the right pointer to the left
//         }
//     }
// }

// Example usage:
// const numbers = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(numbers, target)); // Output: [1, 2]
// ******************************* Maximum **************************************

// function Maximum(array) {
//     let Max = 0;
//     for (let i = 0; i < array.length; i++){
//         if (array[i] > Max) {
//             Max = array[i];
//         }
//     }
//     return Max;
// }
// const array = [1, 2, 3,11, 5];
// const result = Maximum(array)
// console.log(result)
// ******************************* Minimum **************************************

// function Minimum(array) {
//     let Min = array[0];
//     for (let i = 0; i < array.length; i++){
//         if (array[i] > Min)
//         {
//             Min = array[i];
//         }
//     }
//     return Min;
// }
// const array = [9, 2, 5, 11, 7, 3];
// const result = Minimum(array)
// console.log("Minimum:",result);
// ******************************* Second Maximum Number  **************************************

// function SecondMax(array) {
//     let Max = 0;
//     let SecondMax = 0;
//     for (let i = 0; i < array.length; i++){
//         if (array[i] > Max) {
//             SecondMax = Max;
//             Max = array[i];
//         }
//         else if (array[i] > SecondMax && SecondMax < Max) {
//             SecondMax = array[i];
//         }
//     }
//     return SecondMax;
// }
// const array = [1, 2, 3, 45];
// const result = SecondMax(array);
// console.log(result)
// ******************************* Second Minimum **************************************

// function SecondMinimum(array) {
//   let min = array[0];
//   let secondMin = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < min) {
//       secondMin = min;
//       min = array[i];
//     } else if (array[i] < secondMin && secondMin > min) {
//       secondMin = array[i];
//     }
//   }
//   return secondMin;
// }

// let array = [45, 22, 41];
// const result = SecondMinimum(array)
// console.log(result)
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
// const result = TargetChar("aabbbbccaa", "c")
// console.log(result)

// ******************************* Occuring char **************************************

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
// *******************************  **************************************

// let arr = {
//   name:  "aashif",
//     key: 34,
//    name1: "arshad"}
// let arr1 = JSON.stringify(arr)
// console.log(arr1)
// *******************************  **************************************

// let arr = [0, false, "Aashif", 34, true, -1,null,undefined ,""]
// let arr=[0,1,2,3,4,5]
// let falsy=arr.filter((item)=>item)
// console.log(falsy)
// *******************************  **************************************

// let arr = [0, false, "Aashif", 34, true, -1, null, undefined, ""]
// let truthy = [];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i]) {
//         truthy.push(arr[i])
//     }
// }
// console.log(truthy)

// ******************************* duplicate Remove **************************************

// let arr1 = [1, 2, 3,23,3,3,4,44, 1];
// let arr2 = [];
// for (let i = 0; i < arr1.length; i++) {
//   if (arr2.includes(arr1[i]) === false) {
//     arr2.push(arr1[i]);
//   }
// }
// console.log(arr2);

// ******************************* bubble sort **************************************
// function Bubble(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n- 1; i++){
//         for (j = 0; j <n - i - 1; j++){
//             if (arr[j] > arr[j + 1]) {
//                let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// let arr = [4, 3, 2, 7, 9, 1, 5, 8, 6];
// let sorted = Bubble(arr);
// console.log("Sorted Array:",sorted)
// ******************************* Reverse String **************************************

// function Reversed(str) {
//     let Reserve = "";
//     for (let i = str.length-1; i >= 0; i--){
//         Reserve += str[i];
//     }
//     return Reserve;
// }
// let str = "Hello World";
// let Reserved = Reversed(str);
// console.log("Reversed:",Reserved);

// **************************** Palindrome Number ************************
// function Palindrome(digit) {
//   let temp = digit;
//   let sum = 0;
//   while (digit > 0) {
//     let remain = digit % 10;
//     sum = sum * 10 + remain;
//     digit = Math.floor(digit / 10);
//   }
//   if (temp == sum) {
//     console.log("Number is palindrome");
//   } else {
//     console.log("Number is not palindrome");
//   }
// }
// Palindrome(12321);
// **************************** String Number ************************
// function Str(str) {
//     let original = "";
//     for (let i = str.length-1; i >= 0; i--){
//         original += str[i];
//     }
//     if (str == original) {
//       console.log("String is Palindrome");
//     } else {
//       console.log("String is not Palindrome");
//     }
// }
//  Str("nitin")
// ******************************* Fibbonacci Series **************************************

// function Fibbonacci(first, second, n) {
//     let series = [first, second]

//     for (let i = 2; i < n; i++){
//         let third = first + second;
//         series.push(third)
//         first = second;
//         second = third;
//     }
//     return series;

// }
// console.log(Fibbonacci(0, 1, 5));

// function Fibbonacci(first, second, length) {
//     let fib = [0, 1];
//     for (let i = 2; i< length; i++){
//         fib.push(fib[i-1]+fib[i-2])
//     }
//     return fib;
// }
// console.log(Fibbonacci(0,1,6))

// ************************************ Factorial Number  *********************************************

// function Factorial(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }
// console.log(Factorial(5))

// ***************************************** vowel and consonant  **************************************

// let name = "aashif";
// let vowel = "aeiouAEIOU";
// let vowelcount = 0;
// let consonentcount = 0;

// for (let char of name) {
//     if (vowel.includes(char)) {
//         vowelcount++;
//     } else {
//         consonentcount++
//     }
// }
// console.log("Vowels:", vowelcount)
// console.log("Consonant:",consonentcount)

// *************************************** vowel and consonants  *************************************************

// function Check(name) {
//     let vowels = "aeiouAEIOU"
//     let vowelcount = {};
//     let consonantcount = {}
    
//     for (let char of name) {
//         if (vowels.includes(char)) {
//             vowelcount[char] = vowelcount[char] ? vowelcount[char] + 1 : 1;
//         }
//         else {
//             consonantcount[char] = consonantcount[char] ? consonantcount[char] + 1 : 1;
//         }
//     }
//     return {vowelcount,consonantcount}
// }

// let name = "aeiougfg"
// let result = Check(name);
// console.log("vowelcount:",result.vowelcount);
// console.log("consonantcount:",result.consonantcount)
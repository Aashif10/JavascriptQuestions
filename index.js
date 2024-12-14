// ******************************* Bubble Sort **************************************
// function BubbleSort(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j <= array.length - i - 1; j++) {
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

// let name = "aeiougfgtbn"
// let result = Check(name);
// console.log(result.vowelcount);
// console.log(result.consonantcount)
// ******************************** Merge Two Array and duplicate *********************
// let array1 = [1, 2, 3,2,3,4];
// let array2 = [3,3,4,5,5,4,2];
// let array3 = [];

// for (let i = 0; i < array1.length; i++) {
//   if (array3.includes(array1[i]) === false) {
//     array3.push(array1[i]);
//   }
// }
// for (let j = 0; j < array2.length; j++) {
//   if (array3.includes(array2[j]) === false) {
//     array3.push(array2[j]);
//   }
// }
// array3.sort((a, b) => a - b);

// console.log("Merge||Sorted||DuplicateRemove:",array3);

// ***********************  Armstrong *****************

// function Armstrong(num) {
//   let temp = num;
//   let Arm = 0;
//   while (num > 0) {
//     let remain = num % 10;
//     Arm = Arm + remain * remain * remain;
//     num = Math.floor(num / 10)
//   }
//   if (temp === Arm) {
//     console.log("Number is Armstrong:", Arm);
//   } else {
//     console.log("Number is not Armstrong:", temp);
//   }
// }
// Armstrong(371);//153 370 371 407
// *********************************** Sum of digit ***************************
// function DigitCount(num) {
//     let count = 0;
//     while (num > 0) {
//         let remain = num % 10;
//         count += remain;
//         num = Math.floor(num / 10);
//     }
//     return count;
// }
// console.log(DigitCount(12345))
// ********************************* count ***********************************
// function Count(num) {
//   let count = 0;
//   while (num > 0) {
//     num = Math.floor(num / 10);
//     count++;
//     }
//     return count;
// }
// console.log(Count(47887559))

// ***********************************

// function Swap(a, b) {
//     a = a + b;
//     b = a - b;
//     a = a - b;
//     return {a,b}
// }
// console.log(Swap(10, 20));

// let a = 10, b = 20;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log("a:", a)
// console.log("b:", b)

// ************************************ Missing Number in Array **********************************

// let array = [1,4,2];
// let n = array.length;
// let sum = 0;
// let num = n*(n+1) / 2;
// for (let i = 0; i < array.length-1; i++) {
//   sum += array[i];
// }
// let result = num - sum;
// console.log(result);
// ******************************** Find Mising multiple number ***************************
// let array = [5, 1, 2]
// let max = 0;
// for (let j = 0; j < array.length; j++){
//     if (array[j] > max) {
//         max = array[j];
//     }
// }
// let misingNum = [];
// for (let i = 0; i < max; i++){
//     if (!array.includes(i)) {
//         misingNum.push(i)
//     }
// }
// console.log(misingNum)

// function Check(name) {
//     let vowels = "aeiouAEIOU";
//     let vowelcount = "";

//     for (let i = 0; i < name.length; i++){
//         if (!vowelcount.includes(name[i])) {
//             for (let char of vowels) {
//                 if (name[i] === char) {
//                     vowelcount += name[i];
//                 }
//             }
//         }
//     }
//     return vowelcount;
// }
// let name = "arshadeiouiou"
// let result = Check(name)
// console.log(result)
// ************************** Find vowels ***********************
// function Check(name) {
//     let vowels = "aeiouAEIOU";
//     let vowelcount = "";

//     for (let char of name) {
//         if (vowels.includes(char)) {
//             if (vowelcount.includes(char)===false) {
//                 vowelcount += char;
//             }
//         }
//     }
//     return vowelcount;
// }
// let name = "aeiouaeioueqt";
// let result = Check(name);
// console.log(result);
// ************************** Decimal to binary ***********************

// function Binary(num) {
//   let binary = "";
//   while (num > 0) {
//     binary = num % 2+binary;
//     num = Math.floor(num / 2);
//   }
//   return binary;
// }
// let num = 100;
// let result = Binary(num);
// console.log(result);
// ************************** Check Perfect Number ***********************
// function Perfect(num) {
//   let sum = 0;
//   for (let i = 1; i <= num / 2; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }
//   if (sum == num) {
//     console.log("This is perfect number");
//   } else {
//     console.log("This is not perfect Number");
//   }
//   return num;
// }
// let num = 6;
// let result = Perfect(num);
// console.log(result);
// ************************** Check Perfect Number 1 to 100 ***********************
// function Perfect() {
//   let perfectNumber = [];
//   for (let i = 1; i <= 100; i++) {
//     let sum = 0;

//     for (let j = 1; j <= i / 2; j++) {
//       if (i % j === 0) {
//         sum += j;
//       }
//     }

//     if (sum === i) {
//       perfectNumber.push(i);
//     }
//   }
//   return perfectNumber;
// }
// console.log(Perfect());

// ************************************ check valid email************************
// function Valid(email) {
//   let domains = ["@gmail.com", "@gmail.co"];
//   for (let i = 0; i < domains.length; i++) {
//     if (email.includes(domains[i])) {
//       console.log("This valid email");
//       break;
//     } else {
//       console.log("This is not valid");
//       break;
//     }
//   }

//   return email;
// }
// console.log(Valid("aashif@gmail.com"));
// console.log(Valid("aashif@yahoo.com"));
// ********************************* Find Most Occuring ***************************************
// function Occured(str) {
//   let count = {};
//   for (let char of str) {
//     count[char] = count[char] ? count[char] + 1 : 1;
//   }
//   let maxchar = "";
//   let maxcount = 0;
//   for (let char in count) {
//     if (count[char] > maxcount) {
//       maxchar = char;
//       maxcount = count[char];
//     }
//   }
//   return {maxchar,maxcount}
// }
// let str = "javascript is great language"
// let result = Occured(str);
// console.log(result)

// ********************************** Most occuring Number **************************
// function number(num) {
//   let numstr = num.toString();
//   let count = {};
//   for (let i of numstr){
//     count[i] = count[i] ? count[i] + 1 : 1;
//   }
//   let maxcount = 0;
//   let maxdigit = null;
//   for (let num in count){
//     if (count[num] > maxcount) {
//       maxdigit = num;
//       maxcount = count[num];
//        }

//   }
//   return {maxdigit,maxcount};
// }
// let num = 11223322223333;
// let result = number(num)
// console.log(result)
// ******************************************** Reverse string **************


// function sorted(arr) {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > arr[i + 1]) {
//             return false;
//         }
//     }
//     return true
// }
// // let arr = [1, 4, 2, 6, 5];
// let arr=[1,2,3,4,5]
// let result = sorted(arr);
// console.log(result);

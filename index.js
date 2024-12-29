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
// **************************** Palindrome Number ************************
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

// ************************************ Find the largest SubString *******************
// function Longest(str) {
//     let longest = "";
//     let current = "";
//     let char = "";
//     for (let i = 0; i < str.length; i++){
//         char = str[i];
//         if (char === " ") {
//             if (current.length > longest.length) {
//                 longest = current;
//             }
//             current = "";
//         } else {
//             current += char;
//         }
//     }
//     return longest;
// }
//  let str=" I Love My India "
// let result = Longest(str);
// console.log(result);

// let array = [1, 2, 3, 4];
// array.unshift(100);
// console.log(array);

// let arr=[..."Ashif"];
// console.log(arr);

// ************************************* Rotate Array ******************
// function Rotate(array,time) {
//     let n = array.length;
//     let Rotated = []
//     //  time = time % n;
//     for (let i = 0; i < n; i++){
//           Rotated[i]=array[(i+time)%n]
//     }
//     return Rotated;
// }
// let array = [1, 2, 3, 4, 5];
// let result = Rotate(array,3);
// console.log(result)

// ************************************* Rotate Right Array ******************
// function RotateRight(array, times) {
//     let Rotated = [];
//     let n = array.length;
//     for (let i = 0; i < n; i++){
//         Rotated[(i+times)%n]=array[i]
//     }
//     return Rotated;
// }
// let array = [1, 2, 3, 4, 5];
// let result = RotateRight(array,2)
// console.log(result)

// ************************************* Rotate Right String ******************
// function Rotatestring(str, times) {
//     let Rotated =''
//     let n = str.length;
//     for (let i = 0; i < n; i++){
//         Rotated += str[(i + times) % n];
//     }
//     return Rotated
// }
// let str = "upkar"
// let result = Rotatestring(str, 2)
// console.log(result)

// ******************************** Count Freuency of each element ***********************
// function Count(number) {
//     let numstr = number.toString();
//     let count = {};
//     for (let i of numstr) {
//         count[i] = count[i] ? count[i] + 1 : 1;

//     }
//     return count;
// }
// let array = 112222;
// let result = Count(array);
// console.log(result)
// **************************** Rearraging array in decending and accending *****************
// function sort(array) {
//     for (let i = 0; i < array.length; i++){
//         for (let j = 0; j < array.length; j++){
//             if (array[j] > array[j + 1]) {
//                 let temp = array[j]
//                 array[j] = array[j + 1];
//                 array[j+1]=temp
//             }
//         }
//     }
//     return array;
// }
// let array = [2, 4, 1, 5, 3];
// let result = sort(array);
// console.log(result)
// ************************************* Median of array ***********************

// function Median(array) {
//   let len = array.length;
//   let mid = 0;

//   mid = array[Math.floor(len / 2)];

//   return mid;
// }

// let array = [20, 21,  22, 21, 53, 29, 90, 98, 78];
// let result = Median(array);
// console.log(result);
// **************** Add element in array **********
// function AddElement(array) {
//     let Element = [];
//     for (let i = 0; i < array.length; i++){
//         Element[i]= array[i]*2;
//     }
//     return Element;
// }
// let array = [1, 2, 3, 4, 5];
// let Result = AddElement(array)
// console.log(Result)
// **************************************************************************

// function subset(str) {
//     let char = "len";
//     if (str.includes(char)) {
//         return true;
//     } else {
//         return false
//     }
// }
// let str = "javascript is great language"
// let Result = subset(str);
// console.log(Result)

// *************************** Check Anagram string ***********************
// function Anagram(str1, str2) {
//   let count = {};
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   for (let ch of str1) {
//     count[ch] = count[ch] ? count[ch] + 1 : 1;
//   }
//   for (let char of str2) {
//     if (!count[char]) {
//       return false;
//     }
//     count[char]--;
//     }
//     return true;
// }
// let Result = Anagram("listen", "silent");
// console.log(Result);

// *********************************** space Remove *******************************************
// function space(str) {
//     let str2=""
//     // let count ="";
//     for (let char of str) {
//         if (char !== " ") {
//             str2 += char;
//             // count++;
//         }
//     }
//     // return count;
//     return str2;
// }
// let str = "a a s h i f"
// let result = space(str)
// console.log(result)

// ************************************ input from user *************************************
// const prompt = require("prompt-sync")();

// let first = prompt("Enter first Digit: ");
// let second = prompt("Enter Second Digit:");
// let result = Number(first) + Number(second);

// console.log("Output of two digit:", result);

// ************************************ Rotate Array *************************************
// function RotateArray(array,times) {
//     let Reversed = [];
//     let n = array.length;
//     for(let i = 0; i < array.length; i++) {
//         Reversed[i]=array[(i+times)%n]
//     }
//     return Reversed;
// }
// let array = [1, 2, 3, 4, 5, 6, 7];
// let result = RotateArray(array, 4);
// console.log(result)

// function Rotate(array, k) {
//     for (let i = array.length - 1; i > k; i--){
//         let n = array.pop()
//         array.unshift(n);
//     }
//     return array;
// }
// let array = [1, 2, 3, 4, 5, 6,7];
// let result = Rotate(array, 3)
// console.log(result)

// ******************************Product of Array Except Self***************
// function Product(array) {
//   let product = [];
//   let value = 1;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[i] !== array[j]) {
//         value = value * array[j];
//       }
//     }
//     product.push(value);
//     value = 1;
//   }
//   return product;
// }
// let array = [1, 2, 3, 4];
// let result = Product(array);
// console.log(result);

// ******************************Product of Array Except Self***************
// function Product(array) {
//   let value = 1
//   let result = []
//   for (let i = 0; i < array.length; i++) {
//     value *= array[i]
//   }
//   for (let i = 0; i < array.length; i++) {
//     result.push(value / array[i])
//   }
//   return result;
// }
// let array = [1, 2, 3, 4]
// let result = Product(array);
// console.log(result);
// ************************************ find string based on length ****************************
// function Length(str) {
//     let array = str.split(" ");
//     for (let i = 0; i < array.length; i++){
//         if (array[i].length===5) {
//             return array[i]
//         }
//     }
//     return "Not Found";
// }
// let str = " The function now returns soon as detects a word with length";
// let result = Length(str);
// console.log(result);
// **************************** find length  ************************************

// input = "javascript is great language  "
// output= find last word length

// function findLength(str) {
//   let array = str.split(" ");
//   let len = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "language") {
//       return array[i].length;
//     }
//   }
//   return "Not found";
// }
// let str = "javascript is great programming language  ";
// console.log(findLength(str));
// *************************** Delete specific element **************
// function Delete(array, index) {
//     let result=[]
//   if (index < 0 || index > array.length) {
//     return array;
//     }
//     for (let i = 0; i < array.length; i++){
//         if (i !== index) {
//             result.push(array[i]);
//         }
//     }
// }
// ************************************************************
// console.log(typeof(null))
// console.log(typeof (undefined))
// console.log(null==undefined)
// console.log(typeof([]))
// console.log(1==[1,2])

// ********************************* Delete Element specific Position ************************
// function specificPosition(array, postion) {
//     let newArr = [];
//     if (postion < 0|| postion >= array.length) {
//        return "Index not Exists"
//     }
//      for (let i = 0; i < array.length; i++) {
//        if (i !== postion) {
//          newArr.push(array[i]);
//        }
//      }
//     return newArr
// }
// let array = [1, 2, 3, 4, 5];
// let result = specificPosition(array,1);
// console.log(result);

// ************* Intersection of Array *************
// function Intersection(array1, array2) {
//     let newArr=[]
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++)
//         {
//             if (array1[i] == array2[j]) {
//                 newArr.push(array1[i])
//             }
//         }
//     }
//     return newArr
// }
// let array1=[1,2,3,5]
// let array2 = [5,2, 3, 4]
// let result = Intersection(array1, array2)
// console.log(result)
// *****************************Shift Zero *****************************
// function shiftzero(array) {
//     let result = [];
//     for (let i = 0; i < array.length; i++){
//         if (array[i] !== 0) {
//             result.push(array[i])
//         }
//     }
//     while (result.length < array.length) {
//         result.push(0)
//     }
//     return result;
// }
// let array = [0, 1, 0, 2, 3, 0];
// let result = shiftzero(array);
// console.log(result);
// ********************** maximum Product of two element ***********************
// function MaxProduct(array) {
//     let MaxProduct = 1;

//     for (let i = 0; i < array.length; i++){
//         for (let j = i+1; j < array.length; j++){
//             let product = array[i] * array[j]
//             if (product > MaxProduct) {
//                 MaxProduct = product;
//             }
//         }
//     }
//     return MaxProduct;
// }
// let array = [1,5,7,9,3, 6];
// let result = MaxProduct(array);
// console.log(result);
// ********************** manimum Product of two element ***********************
// function MinProduct(array) {
//     let MinProduct = Infinity;

//     for (let i = 0; i < array.length; i++){
//         for (let j = i+1; j < array.length; j++){
//             let product = array[i] * array[j]
//             if (product < MinProduct) {
//                 MinProduct = product;
//             }
//         }
//     }
//     return MinProduct;
// }
// let array = [1,5,7,9,3, 6];
// let result = MinProduct(array);
// console.log(result);

// ********************** maximum two of two element ***********************
// function MaxSum(array) {
//     let sum = 0;
//     let maxsum = 0;
//     for (let i = 0; i < array.length; i++){
//         for (let j = i + 1; j < array.length; j++){
//             sum = array[i] + array[j];
//             if (sum > maxsum) {
//                 maxsum = sum;
//             }
//         }
//     }
//     return maxsum
// }
// let array = [2, 4, 1, 6, 8, 3, 6, 2, 9];
// let result = MaxSum(array);
// console.log(result)

// ******************* maximum Product of three element ***************
// function MaxProduct(array) {
// let sum = 0;
//     let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
//     let product = 1;
//     for (let element of array) {
//         if (element > max1) {
//             max3 = max2;
//             max2 = max1;
//             max1 = element;
//         }
//         else if (element > max2) {
//             max3 = max2;
//             max2 = element;
//         }
//         else if (element > max3) {
//             max3 = element;
//         }
//     }
//     // product = max1 * max2 * max3;
//     sum = max1 + max2 + max3;
       
//     // return {product,max1,max2,max3}
//     return sum;
    
// }
// let array = [1, 9, 5, 8, 2, 4, 3, 12, 32];
// let result = MaxProduct(array);
// console.log("Sum of max three number:",result)

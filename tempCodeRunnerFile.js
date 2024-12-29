function specificPosition(array, postion) {
    let newArr = [];
    if (postion < 0|| postion >= array.length) {
       return "Index not Exists"
    }
     for (let i = 0; i < array.length; i++) {
       if (i !== postion) {
         newArr.push(array[i]);
       }
     }
    return newArr
}
let array = [1, 2, 3, 4, 5];
let result = specificPosition(array,1);
console.log(result);
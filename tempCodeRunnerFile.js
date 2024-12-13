function Binary(num) {
    let binary = ""
    while (num > 0) {
        binary = (num % 2) +binary
        num = Math.floor(num / 2);
    }
    return binary;
    
}
let num = 20;
let result = Binary(num)
console.log(result)
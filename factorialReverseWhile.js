function reverseFactorialCalculate(number) {
    let i = num;
    let sum = 1;
    while(i >= 1){
        sum = sum * i;
        i--
        
    }
    return sum;
}

let num = 7;
let result = reverseFactorialCalculate(num);
console.log(result);
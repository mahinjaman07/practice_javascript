// While loop factorial Calculate

function reverseFactorialCalculate(num){

    let i = 1;
    let sum = 1;
    while (i <= num) {
        sum = sum * i;
        i++
        
        
    }
    return sum;
}

let number = 7;
let result = reverseFactorialCalculate(number);
console.log(result);

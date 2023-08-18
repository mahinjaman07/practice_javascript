function factorialCalcualte(numbers) {
    let sum = 1;
    for (let i = 1; i <= numbers; i++) {
        sum = sum * i;
        
    }
    return sum;
}

let sum = factorialCalcualte(9);

console.log(sum);


reverse Factorial Calculate

function reverseFactorialCalculate(num){
    let sum = 1;

    for (let i = num; i >= 1; i--) {
        sum = i * sum;
       
        
    }
    return sum;
}


let number = 7;

const mahin = reverseFactorialCalculate(number);
console.log(mahin);







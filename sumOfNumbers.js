function sumOfNumber(number){
    let sum = 0 ;
    for (let i = 0; i <= number; i++) {
        sum += i;
        // console.log(i,sum);
        
    }
    return sum;
}

let numbers = 7;
sum = sumOfNumber(numbers);
console.log(sum);
sumOfNumber(numbers)
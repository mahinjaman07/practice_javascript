
let sum  = 0;
function getSumofAnArray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        var index = numbers[i];
        sum = sum + index;
        console.log(sum);
        
    }
    
}


var number = [20, 35, 36, 45, 76, 89, 78];
getSumofAnArray(number);


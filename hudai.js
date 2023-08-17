// function getSumOfAnArray(number) {
//     const oddNumbers = [];
//     for (let i = 0; i < number.length; i++) {
//         let index = i;
//         let element = number[i];
//         if(element % 2!==0){
//             // console.log(element);
//             oddNumbers.push(element);
//         }
        
//     }

//     return oddNumbers;
// }

// let num = [20, 23, 35, 56, 78, 89, 74, 84, 59];
// const oddNumbers = getSumOfAnArray(num);
// console.log(oddNumbers);
// getSumOfAnArray(num);

function getSumOddAnArray(numbers) {
    let sumOddNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        let index = 1;
        let element = numbers[i];
        if(element % 2 !==0){
           sumOddNumber.push(element);

        }
    }
    return sumOddNumber;
}

let number = [23, 56, 59, 22, 45, 48, 78, 79, 98, 54];
sumOddNumber = getSumOddAnArray(number);
console.log(sumOddNumber);
// getSumOddAnArray(number);

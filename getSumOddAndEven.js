// function getSumOddAndEven(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         let index = i;
//         let oddAndEven = numbers[i];
//         if(oddAndEven %2 ===0){
//             console.log(oddAndEven);
//         }
//     }
    
    
// }

// let sumNumbers = [20, 23, 35, 56, 78, 89, 74, 84, 59];
// getSumOddAndEven(sumNumbers);






function getSumOdd(odd) {
    let numberInOdd = [];
    for (let i = 0; i < odd.length; i++) {
        
        let index = i;
        var oddNumber = odd[i];
        if(oddNumber % 2 !==0){
            // console.log(index , oddNumber);
            numberInOdd.push(oddNumber);
        }
        
        
    }
    return numberInOdd;
}




let numberOdd = [20, 23, 35, 56, 78, 89, 74, 84, 59];

let numberInOdd = getSumOdd(numberOdd);
// console.log(numberInOdd);



function oddOrEven(number) {
    let even = number % 2;
    if(even == 0){
        return true;
    }
    else{
        return false;
    }
        
    }

 let myNumber = oddOrEven(26);
 console.log('your Number Is even',myNumber);
 let yourNumber = oddOrEven(59);
 console.log('your Number Is even',yourNumber );
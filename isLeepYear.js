function isLeepYear(year) {
    if(year % 4 ==0){
        return true;
    }

    else{
        return false;
    }
    
}
var leepYear = isLeepYear(2080);
console.log(leepYear);




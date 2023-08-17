function kilomitersToMiles(kilomiter) {
    var mile = kilomiter / 1.60934;
    return mile;
}

let miles = kilomitersToMiles(100);
console.log(miles);
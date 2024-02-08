const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


// 1) should have a `totalBatteries` variable
// 2) should have a number as a result
// 3) should have made the sum of all the assembled batteries
// Code your solution here

const reducer = (accumulator, element) => accumulator + element;
    
let totalBatteries = batteryBatches.reduce(reducer);
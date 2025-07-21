
// Normal function
function sum(numbers){
let total = 0;
for(let i = 0; i < numbers.length; i++){
    total += numbers[i];
}
return total;
}

// Arrow function
const sumArrow = (numbers) => {
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total;
};

let numbers = [1, 2, 3, 4, 5];
let totalSum = sum(numbers);
let totalSumArrow = sumArrow(numbers);

console.log('Total sum: ' + totalSum);
console.log('Total sum (Arrow): ' + totalSumArrow);
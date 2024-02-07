// Create a function that takes two numbers as arguments (num, length) and
// returns an array of multiples of num until the array
// length reaches length.

// Examples

// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// function arrayOfMultiples() {
//   let mult = 1;
//   let myArray = [];
//   for (let i = 1; i < 10; i++) {
//     // const element = array[i];
//    return  mult *= i
  
//   }
// }
// arrayOfMultiples()
// console.log(arrayOfMultiples())

function arrayOfMultiples(num, length) {
    const result = [];
    
    for (let i = 1; i <= length; i++) {
        result.push(num * i);
    }

    return result;
}

// Example usage:
console.log(arrayOfMultiples(7, 5));   // Outputs [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10)); // Outputs [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6));  // Outputs [17, 34, 51, 68, 85, 102]

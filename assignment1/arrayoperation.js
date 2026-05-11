const numbers=[5,10,15,20,25];

//add 30 at the end
numbers.push(30);
console.log("add no.",numbers);

//remove the first element
numbers.shift(5);
console.log("remove:",numbers);


// Find the sum of all numbers

let sum = numbers.reduce((total, num) => total + num, 0);

console.log("Sum:", sum);

// Print numbers greater than 15

let greaterNumbers = numbers.filter(num => num > 15);

console.log("Numbers greater than 15:", greaterNumbers);
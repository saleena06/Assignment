// Using let
let userName = "Saleena";
console.log(userName);

// Value can be changed
userName = "Anil";
console.log(userName);


// Using const
const country = "India";
console.log(country);

// const value cannot be changed
// country = "USA";   


// Difference Example
let age = 20;
age = 21; 

const pi = 3.14;
// pi = 3.14159;


// Block Scope Example
{
  let city = "Delhi";
  const state = "Haryana";

  console.log(city);
  console.log(state);
}
// create an empty erray called colors
const colors = [];

// add three colors using push()
colors.push("blue");
colors.push("pink");
colors.push("purple");

// create another array with five numbers
const numbers = [10, 20, 30, 40, 50];

// remove the last color
colors.pop();

// add a new color to the beginning
colors.unshift("green");

// print the errays
console.log("colors:", colors);
console.log("numbers:", numbers);

// print the length of both errays
console.log("colors length:", colors.length)
console.log("numbers length:", numbers.length);
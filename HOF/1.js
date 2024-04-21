let input = "My name is ayush godbole";

setTimeout(() => {
  let output = input.split("").reverse().join("");
    console.log(output);
}, 2000);

// reversing using for loop
let reversedString = "";
for (let i = input.length - 1; i >= 0; i--) {
  reversedString += input[i];
}
setTimeout(() => {
    console.log(reversedString);
}, 2000);

let reversed = input.split("").reduce((prev, curr) => curr + prev, "");

setTimeout(() => {
    console.log(reversed);
}, 2000);
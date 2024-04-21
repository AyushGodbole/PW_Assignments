
let numbers = [1, 2, 4, 1, 3, 5, 4, 5, 6, 8, 5, 3, 7, 9 , 9 ,1, 2];

function duplicateRemover(inputArr) {
  let uniqueNumbers = new Set(inputArr);
  return uniqueNumbers;
}

const outputArr = duplicateRemover(numbers);
console.log(outputArr);
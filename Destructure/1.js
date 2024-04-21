function wordCounter(input) {
    const words = input.split(" ");
    const countWords = new Map();
  
    words.forEach((word) => {
      if (word in countWords) {
        countWords[word]++;
      } else {
        countWords[word] = 1;
      }
    });
  
    return countWords;
  }
  
  const inputString =
    "Hello my name is ayush godbole";
  console.log(wordCounter(inputString));
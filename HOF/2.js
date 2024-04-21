let delay = 3000; // time in miliseconds
let timeLeft = delay / 1000;

let timer = setInterval(() => {
  timeLeft--;
  console.log(`Genrating random number in ${timeLeft} seconds...`);
  if (timeLeft <= 0) {
    clearInterval(timer);
    let randomNumber = Math.floor(Math.random() * 100000);
    console.log(`Random number generated: ${randomNumber}`);
  }
}, 1000);

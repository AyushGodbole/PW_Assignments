function swapVariables(x, y) {
    [x, y] = [y, x];
    return [x, y];
  }
  
  console.log(swapVariables(5, 4));
  console.log(swapVariables(2, 10));
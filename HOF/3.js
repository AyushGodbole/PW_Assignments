const cart = {
    WashingMachine: 315.99,
    Ac: 639.49,
    DishWasher: 125.99,
    freezer: 249.49,
  };
  
  let exchnageRate = 80;
  
  let itemsInRupees = Object.keys(cart).map((item) => {
    return { item: cart[item] * exchnageRate };
  });
  console.log(itemsInRupees);
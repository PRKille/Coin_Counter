import { CoinCounter } from './../src/coin_counter.js';

describe ('CoinCounter', () => {
  test ('should correctly return an array of coin values', () => {
    var coinCounter = new CoinCounter(1.75, 2.25);
    var quarters = coinCounter.toCoins();
    console.log(quarters);
    expect (quarters).toEqual([.25, .25])
  });

  test ('returns string of number of coins', () => {
    var coinCounter = new CoinCounter(1.75, 2.25);
    var quarters = coinCounter.countChange();
    console.log(quarters);
    expect(quarters).toEqual(" Quarters: 2")
  });

  test ('returns string of number of quarters and dimes', () => {
    var coinCounter = new CoinCounter(1.75, 2.35);
    var coins = coinCounter.countChange();
    console.log(coins);
    expect(coins).toEqual(" Dimes: 1Quarters: 2")
  });
})

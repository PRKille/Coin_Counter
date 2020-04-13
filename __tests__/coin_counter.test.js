import { CoinCounter } from './../src/coin_counter.js';

describe ('CoinCounter', () => {
  test ('should correctly return the number of quarters', () => {
    var coinCounter = new CoinCounter(1.75, 2.00);
    var quarters = coinCounter.toCoins();
    console.log(quarters);
    expect (coinCounter.toCoins()).toEqual()
  });
})

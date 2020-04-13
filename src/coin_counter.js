export function CoinCounter(price, cash) {
  this.price = price;
  this.cash = cash;
  this.change = cash - price;
  this.coins = [.25, .10, .05, .01];
}

CoinCounter.prototype.toCoins = function(change, coins) {
  if(isNaN(change)) {
    return;
  }
  if (change === 0) {
    return [];
  } else {
    if (change >= coins[0]) {
      remains = (change - coins[0]);
      return [coins[0]].concat( this.toCoins(remains, coins));
    } else {
      coins.shift();
      return this.toCoins(change, coins);
    }
  }
}

// CoinCounter.prototype.countChange = function() {
//   if(isNaN(this.change)) {
//     return;
//   }
//   if(this.change <= 0) {
//     return "";
//   }
//   else {
//     if(this.change >= .25){
//       const quarters = this.change/.25;
//       this.change = this.change%.25;
//       return this.countChange() + `Quarters: ${quarters}`;
//     }
    // else if(this.change >= .1){
    //   const change2 = this.change%.25;
    //   const dimes = change2/.1;
    //   return CoinCounter.countChange(this.change%.1) + `Dimes: ${dimes}`;
    // }
    // // else if(this.change >= .05){
    //   const nickels = this.change/.05;
    //   console.log("Nickels: " + nickels);
    //   return CoinCounter.countChange(this.change%.05) + "";
    // }
    // else(this.change >= .01)
    //   const pennies = this.change/.01;
    //   console.log("Pennies: " + pennies);
    //   return CoinCounter.countChange(this.change%.01) + "";
  // }
// }
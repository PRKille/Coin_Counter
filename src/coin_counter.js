export function CoinCounter(price, cash) {
  this.price = price;
  this.cash = cash;
  this.change = cash - price;
  this.coins = [.25, .10, .05, .01];
}

CoinCounter.prototype.toCoins = function() {
  if(isNaN(this.change)) {
    return "blah";
  }
  if (this.change === 0) {
    return [];
  } else {
    if (this.change >= this.coins[0]) {
      this.change = (this.change - this.coins[0]);
      return [this.coins[0]].concat(this.toCoins());
    } else {
      coins.shift();
      return this.toCoins(this.change, this.coins);
    }
  }
}

CoinCounter.prototype.countChange = function() {
  if(isNaN(this.change)) {
    return "blah";
  }
  if(this.change < .01) {
    return "";
  }
  else {
    if(this.change >= .25){
      const quarters = Math.floor(this.change/.25);
      this.change = (this.change - quarters*.25);
      return this.countChange() + ` Quarters: ${quarters}`;
    } else if (this.change >= .1) {
      const dimes = Math.floor(this.change/.10);
      this.change = (this.change - dimes*.10);
      return this.countChange() + ` Dimes: ${dimes}`;
    } else if (this.change >= .05) {
      const nickels = Math.floor(this.change/.05);
      this.change = (this.change - nickels*.05);
      return this.countChange() + ` Nickels: ${nickels}`;
    } else if (this.change < .05 && this.change >=.01) {
      const pennies = Math.round(this.change*100);
      this.change = 0;
      return this.countChange() + `Pennies: ${pennies}`;
    }
  }
}
// Coin Change Problem

function coinChange(coins, amount) {
  // Sort coins in descending order
  coins.sort((a, b) => b - a);

  let totalCoins = 0;
  let remainingAmount = amount;

  for (let coin of coins) {
    // Calculate how many coins of this denomination we can use
    let count = Math.floor(remainingAmount / coin);

    // Update the total number of coins used
    totalCoins += count;

    // Update the remaining amount
    remainingAmount -= count * coin;

    // If no amount is remaining, we are done
    if (remainingAmount === 0) {
      break;
    }
  }

  // If there is still remaining amount, return -1 indicating it's not possible
  if (remainingAmount !== 0) {
    return -1;
  }

  return totalCoins;
}

// Example usage:
const coins = [1, 5, 10, 25];
const amount = 63;
console.log(coinChange(coins, amount)); // Output: 6 (2x25 + 1x10 + 3x1)

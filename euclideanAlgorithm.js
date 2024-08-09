function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  // Base case: if b is 0, gcd is a
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

// Example usage:
let num1 = 24;
let num2 = 16;
console.log(`GCD of ${num1} and ${num2} is ${gcd(num1, num2)}`);

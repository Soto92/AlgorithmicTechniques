function karatsuba(x, y) {
  if (x < 10 || y < 10) {
    return x * y;
  }

  const n = Math.min(x.toString().length, y.toString().length);
  const m = Math.floor(n / 2);

  const high1 = Math.floor(x / Math.pow(10, m));
  const low1 = x % Math.pow(10, m);
  const high2 = Math.floor(y / Math.pow(10, m));
  const low2 = y % Math.pow(10, m);

  const z0 = karatsuba(low1, low2);
  const z1 = karatsuba(low1 + high1, low2 + high2);
  const z2 = karatsuba(high1, high2);

  return z2 * Math.pow(10, 2 * m) + (z1 - z2 - z0) * Math.pow(10, m) + z0;
}

let x = 2244;
let y = 1212;
console.log(`Multiplication of ${x} and ${y} using Karatsuba Algorithm:`);
console.log(karatsuba(x, y));

// Define the target PIN
const targetPIN = "1234";

// Function to generate a PIN of given length
function generatePIN(length) {
  let pin = "";
  for (let i = 0; i < length; i++) {
    pin += Math.floor(Math.random() * 10);
  }
  return pin;
}

// Brute force function
function bruteForcePIN(target, maxLength) {
  let attempts = 0;
  let found = false;
  let guess;

  // Loop through all possible PINs
  while (!found) {
    guess = generatePIN(maxLength);
    attempts++;
    if (guess === target) {
      found = true;
    }
  }

  return { attempts, guess };
}

// Run the brute force attack
const result = bruteForcePIN(targetPIN, 4);

console.log(`PIN found: ${result.guess}`);
console.log(`Attempts: ${result.attempts}`);

export function verifyGuess(num, guess) {
  if (num == guess) {
    return "correct";
  } else if (num > guess) {
    return "high";
  } else {
    return "low";
  }
}

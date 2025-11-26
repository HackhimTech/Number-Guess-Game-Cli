export function verifyGuess(secret, guess) {
  const g = Number(guess);

  if (Number.isNaN(g)) return "Invalid";
  if (secret === g) return "correct";
  if (secret > g) return "high";

  return "low";
}

import { input } from "@inquirer/prompts";
import { error, log as print, success, warning } from "./utils/logger.js";
import { select } from "@inquirer/prompts";
import { setGameDifficulty } from "./helper/gameDifficulty.js";
import { generateRandomNumber } from "./services/randomGenerator.js";
import { verifyGuess } from "./services/gameLogic.js";
import { DIFFICULTY_OPTIONS } from "./constants/gameConstants.js";

async function Main() {
  print(`Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 5 chances to guess the correct number.`);

  const choice = await select({
    message: "Please select the difficulty level:",
    choices: DIFFICULTY_OPTIONS,
  });

  const { difficulty, chances } = setGameDifficulty(choice);
  print(
    `\nGreat! You have selected the ${difficulty} difficulty level. \nLet's start the game!\n`
  );

  const secret = generateRandomNumber();
  let attempts = chances;

  while (attempts > 0) {
    const guess = await input({ message: "Enter your guess:" });
    const result = verifyGuess(secret, guess);

    if (result === "Invalid") {
      print(error("Please enter a valid number!\n"));
      continue;
    }
    if (result === "correct") {
      print(
        success(
          `Congratulations! You guessed the correct number in ${attempts} attempts`
        )
      );
      return;
    }

    const hint = result === "high" ? "greater" : "less";
    print(warning(`Incorrect! The number is ${hint} than ${guess}\n`));
    attempts--;
  }
  print(error(`Out of chances! The number was ${secret}.`));
}

Main();

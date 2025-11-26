import { input } from "@inquirer/prompts";
import { error, log as print, succes, warning } from "./utils/logger.js";
import { select } from "@inquirer/prompts";
import { setGameDifficulty } from "./helper/gameDifficulty.js";
import { generateRandomNumber } from "./services/randomGenerator.js";
import { verifyGuess } from "./services/gameLogic.js";

print(`Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 5 chances to guess the correct number. \n`);

const option = {
  message: "Please select the difficulty level:",
  choices: [
    {
      name: "Easy ( 10 chances )",
      value: 10,
      description: "Nice difficulty to start with",
    },
    {
      name: "Medium ( 5 chances )",
      value: 5,
      description: "Good to try your luck",
    },
    {
      name: "Hard ( 3 chances )",
      value: 3,
      description: "Hmm nice try",
    },
  ],
};

async function Main() {
  const choice = await select(option);
  const level = setGameDifficulty(choice);
  print(
    `\nGreat! You have selected the ${level.difficulty} difficulty level. \nLet's start the game!\n`
  );

  let attempts = level.chances;
  const randNum = generateRandomNumber();

  while (attempts >= 0) {
    if (attempts === 0) {
      print(
        error(
          `You ran out of chances ${attempts} attempts left, try again later.`
        )
      );
      process.exit(0);
    }

    const guess = await input({ message: "Enter your guess:" });
    const answer = verifyGuess(randNum, guess);

    if (answer === "correct") {
      print(
        succes(
          `Congratulations! You guessed the correct number in ${attempts} attempts`
        )
      );
      process.exit(0);
    }
    if (answer === "high") {
      print(warning(`Incorrect! The number is greater than ${guess}\n`));
    } else {
      print(warning(`Incorrect! The number is less than ${guess}\n`));
    }

    attempts--;
  }
}

Main();

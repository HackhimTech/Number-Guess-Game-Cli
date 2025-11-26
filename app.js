import { input } from "@inquirer/prompts";
import { log as print } from "./utils/logger.js";
import { select } from "@inquirer/prompts";
import { setGameDifficulty } from "./helper/gameDifficulty.js";
import { generateRandomNumber } from "./services/randomGenerator.js";
import { verifyGuess } from "./services/gameLogic.js";

log(`Welcome to the Number Guessing Game!
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
  log(
    `\nGreat! You have selected the ${level.difficulty} difficulty level. \nLet's start the game!\n`
  );

  const randNum = generateRandomNumber();
  const guess = await input({ message: "Enter your guess:" });
  const answer = verifyGuess(randNum, guess);
  if (answer === "correct") {
    print()
  }
}

Main();

# 🔢 CLI Number Guessing Game

A simple Command Line Interface (CLI) application built with Node.js and the `@inquirer/prompts` library, allowing a user to guess a secret number within a selected difficulty level.

## ✨ Features

- **Difficulty Selection:** Choose from Easy (10 chances), Medium (5 chances), or Hard (3 chances).
- **Interactive Prompts:** Uses the `@inquirer/prompts` library for a polished, interactive command-line experience.
- **Guess Tracking:** (Planned) Tracks remaining guesses and provides feedback (Too High/Too Low).
- **Game Loop:** (Planned) Allows the user to play multiple rounds.

## 🗂 Project structure

```bash
📦 number-guessing-game
├── app.js               # Main game entry
├── helper/
│   └── gameDifficulty.js
├── services/
│   ├── randomGenerator.js
│   └── gameLogic.js
├── utils/
│   └── logger.js
├── constants/
│   └── gameConstants.js
└── README.md
```

## 📦 Requirements

- Node.js v18+
- NPM (comes with Node)

## 🚀 Installation & Setup

This is a Node.js project. You'll need Node.js (v18+) installed on your machine.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/HackhimTech/Number-Guess-Game-Cli
    cd Number-Guess-Game-Cli
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## 🎮 How to Run the Game

To start the game, run the main file using Node:

```bash
node app.js
```

1. Select a difficulty level
2. Enter your guesses
3. Receive immediate feedback
4. Win before your chances run out!

Example:

```bash
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.

Choose difficulty:

> Easy (10 chances)
> Medium (5 chances)
> Hard (3 chances)
```

### 🧠 How It Works (Simple Explanation)

The game secretly picks a random number (1–100)
You guess the number
The game tells you whether your guess is too high, too low, or correct
You win if you guess it before your chances reach zero

## 🧩 Technology Used

Node.js – Backend runtime
@inquirer/prompts – For interactive CLI inputs
Chalk – Colorful console output
ES Modules – Modern JS import/export

## Project Link

I got inspiration for this project from Roadmap
🔗 https://roadmap.sh/projects/number-guessing-game

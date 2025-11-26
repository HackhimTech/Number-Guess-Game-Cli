import {
  EASY_CHANCES,
  HARD_CHANCES,
  MEDIUM_CHANCES,
} from "../constants/gameConstants.js";
import { log } from "../utils/logger.js";

export function setGameDifficulty(choice) {
  let level = {};
  switch (choice) {
    case EASY_CHANCES:
      level["chances"] = choice;
      level["difficulty"] = "Easy";
      break;
    case MEDIUM_CHANCES:
      level["chances"] = choice;
      level["difficulty"] = "Medium";
      break;
    case HARD_CHANCES:
      level["chances"] = choice;
      level["difficulty"] = "Hard";
      break;

    default:
      log("Invalid level!");
      process.exit(1);
  }

  return level;
}

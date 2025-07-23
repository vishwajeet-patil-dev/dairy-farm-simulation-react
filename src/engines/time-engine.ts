import { REAL_MS_IN_GAME_MINUTE } from "../constants/time";
import { cowList } from "../game-states";

setInterval(() => {
  cowList.forEach((cow) => cow.tickMinute());
}, [REAL_MS_IN_GAME_MINUTE]);

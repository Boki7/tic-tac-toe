import * as tableType from "./table.types";

export const playMove = (square, player) => {
  return {
    type: tableType.PLAY_MOVE,
    payload: {
      square,
      player
    }
  };
};

export const undoMove = () => {
  return {
    type: tableType.UNDO_MOVE
  };
};

export const restartGame = () => {
  return {
    type: tableType.RESTART_GAME
  };
};

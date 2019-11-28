import { checkWinner } from "./table.utils";
import * as tableType from "./table.types";

const INITIAL_STATE = {
  table: {
    0: { id: 0, value: null },
    1: { id: 1, value: null },
    2: { id: 2, value: null },
    3: { id: 3, value: null },
    4: { id: 4, value: null },
    5: { id: 5, value: null },
    6: { id: 6, value: null },
    7: { id: 7, value: null },
    8: { id: 8, value: null }
  },
  moves: Array(9).fill(null),
  winner: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tableType.PLAY_MOVE:
      const newMoves = [...state.moves];
      newMoves[action.payload.square.id] = action.payload.player.value;

      return {
        ...state,
        table: {
          ...state.table,
          [action.payload.square.id]: {
            ...state.table[action.payload.square.id],
            value: action.payload.player.value
          }
        },
        moves: newMoves,
        winner: checkWinner(newMoves)
      };
    case tableType.RESTART_GAME:
      return INITIAL_STATE;
    default:
      return state;
  }
};

import { chooseStartingValue, setPlayerIsPlaying, startingPlayerSettings } from "./players.utils";
import * as playersType from "./players.types";
import * as tableType from "../table/table.types";

const INITIAL_STATE = {
  activePlayer: null,
  player1: {
    isPlaying: false,
    value: "",
    text: "Player1"
  },
  player2: {
    isPlaying: false,
    value: "",
    text: "Player2"
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case playersType.CHOOSE_VALUE:
      const { value1, value2 } = chooseStartingValue(
        action.payload.firstValue,
        action.payload.secondValue,
        action.payload.player.text
      );

      return {
        ...state,
        player1: startingPlayerSettings(value1, state.player1),
        player2: startingPlayerSettings(value2, state.player2)
      };
    case playersType.SET_ACTIVE_PLAYER:
      return {
        ...state,
        activePlayer:
          state.player1.isPlaying === true ? state.player1 : state.player2
      };
    case tableType.PLAY_MOVE:
      return {
        ...state,
        activePlayer:
          state.activePlayer.text === "Player1" ? state.player1 : state.player2,
        player1: setPlayerIsPlaying(state.player1),
        player2: setPlayerIsPlaying(state.player2)
      };
    case tableType.UNDO_MOVE:
      return {
        ...state,
        activePlayer:
          state.activePlayer.text === "Player1" ? state.player2 : state.player1,
          player1: setPlayerIsPlaying(state.player1),
          player2: setPlayerIsPlaying(state.player2)
      };
    case tableType.RESTART_GAME:
      return INITIAL_STATE;
    default:
      return state;
  }
};
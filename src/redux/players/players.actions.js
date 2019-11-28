import * as playersType from "./players.types";

export const setActivePlayer = () => {
  return {
    type: playersType.SET_ACTIVE_PLAYER
  };
};

export const chooseValue = (firstValue, secondValue, player) => {
  return {
    type: playersType.CHOOSE_VALUE,
    payload: {
      firstValue,
      secondValue,
      player
    }
  };
};

export const setIsPlaying = player => {
  if (player === "Player1") {
    return false;
  } else if (player === "Player2") {
    return true;
  }
};

export const chooseStartingValue = (firstValue, secondValue, player) => {
  if (player === "Player1") {
    return {
      value1: firstValue,
      value2: secondValue
    };
  } else if (player === "Player2") {
    return {
      value1: secondValue,
      value2: firstValue
    };
  }
};

// action.payload.player.text === "Player1"
// ? action.payload.firstValue
// : action.payload.secondValue

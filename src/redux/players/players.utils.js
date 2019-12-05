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

export const startingPlayerSettings = (value, player) => {
  return {
    ...player,
    isPlaying: value === "x" ? true : false,
    value,
    text: player.text
  }
}



export const setPlayerIsPlaying = (player) => {
  return {
    ...player,
    isPlaying: !player.isPlaying
  }
}
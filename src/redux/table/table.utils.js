export const checkWinner = newMoves => {
  let winner = null;
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  lines.forEach(line => {
    const [a, b, c] = line;
    if (
      newMoves[a] &&
      newMoves[a] === newMoves[b] &&
      newMoves[a] === newMoves[c]
    ) {
      winner = newMoves[a];
    }
  });
  return winner;
};

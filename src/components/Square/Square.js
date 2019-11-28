import React from "react";
import "./Square.css";
import { playMove } from "../../redux/table/table.actions";
import { setActivePlayer } from "../../redux/players/players.actions";
import { connect } from "react-redux";

const Square = ({ square, playMove, player, winner, setActivePlayer }) => {
  const handlePlayMove = (square, player) => {
    if (square.value === null && !winner && player.value !== "") {
      playMove(square, player);
      setActivePlayer();
    }
  };

  return (
    <div className="square" onClick={() => handlePlayMove(square, player)}>
      {square.value}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    player: state.players.activePlayer,
    winner: state.table.winner
  };
};

export default connect(mapStateToProps, {
  playMove,
  setActivePlayer
})(Square);

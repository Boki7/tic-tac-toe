import React from "react";
import "./Undo.css";
import { connect } from "react-redux";
import { undoMove } from "../../redux/table/table.actions";

const Undo = ({ undoMove, playedMoves, winner }) => {
  if (!playedMoves.length) return null;
  if (winner) return null;
  return (
    <button className="undo" onClick={undoMove}>
      Undo
    </button>
  );
};

const mapStateToProps = state => {
  return {
    playedMoves: state.table.playedMoves,
    winner: state.table.winner
  };
};

export default connect(mapStateToProps, {
  undoMove
})(Undo);

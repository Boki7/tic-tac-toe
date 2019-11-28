import React from "react";
import { connect } from "react-redux";
import Square from "../Square/Square";
import "./Table.css";
import { restartGame } from "../../redux/table/table.actions";

const Table = ({ table, restartGame, winner, activePlayer }) => {
  const renderTable = () => {
    return table.map(square => {
      return <Square key={square.id} square={square} />;
    });
  };
  return (
    <div className="table">
      {renderTable()}
      <div onClick={restartGame}>Restart Game</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    table: Object.values(state.table.table),
    winner: state.table.winner,
    activePlayer: state.players.activePlayer
  };
};

export default connect(mapStateToProps, {
  restartGame
})(Table);

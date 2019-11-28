import React from "react";
import Player from "./Player/Player";
import Table from "./Table/Table";
import { connect } from "react-redux";
import { setActivePlayer } from "../redux/players/players.actions";

import "./App.css";

function App({ player1, player2, winner }) {
  return (
    <div className="app">
      <Player player={player1} winner={winner} />
      <Table />
      <Player player={player2} winner={winner} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    player1: state.players.player1,
    player2: state.players.player2,
    winner: state.table.winner
  };
};

export default connect(mapStateToProps, {
  setActivePlayer
})(App);

import React from "react";
import "./Player.css";
import PickValue from "../PickValue/PickValue";
import { connect } from "react-redux";

const Player = ({ player, winner }) => {
  const classes = player.isPlaying ? "player activePlayer" : "player";

  const renderWinner = () => {
    if (winner === player.value) {
      return <div>Winner!</div>;
    }
  };

  return (
    <div className={classes}>
      <div>{player.text}</div>
      <div>{player.value}</div>
      <PickValue player={player} />
      {renderWinner()}
    </div>
  );
};

export default connect()(Player);

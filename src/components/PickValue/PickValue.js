import React from "react";
import { connect } from "react-redux";
import {
  chooseValue,
  setActivePlayer
} from "../../redux/players/players.actions";

const PickValue = ({ chooseValue, player, setActivePlayer, activePlayer }) => {
  if (activePlayer) {
    return <div></div>;
  }

  const handleClick = (f, s, p) => {
    chooseValue(f, s, p);
    setActivePlayer();
  };

  return (
    <div>
      <button onClick={() => handleClick("x", "o", player)}>X</button>
      <button onClick={() => handleClick("o", "x", player)}>O</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activePlayer: state.players.activePlayer
  };
};

export default connect(mapStateToProps, {
  chooseValue,
  setActivePlayer
})(PickValue);

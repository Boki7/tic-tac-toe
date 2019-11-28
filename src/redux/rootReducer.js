import { combineReducers } from "redux";

// REDUCERS
import playersReducer from "./players/players.reducer";
import tableReducer from "./table/table.reducer";

export default combineReducers({
  players: playersReducer,
  table: tableReducer
});

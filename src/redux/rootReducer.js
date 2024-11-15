import { combineReducers } from "redux";
import todosReducer from "./todos/reducer";
import filterReducer from "./filters/reducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filterReducer,
});

export default rootReducer;

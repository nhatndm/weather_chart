import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { CitiesReducer } from "./Cities";
import { WeathersReducer } from "./Weathers";

const rootReducer = combineReducers({
  cities: CitiesReducer,
  weathers: WeathersReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

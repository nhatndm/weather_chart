import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { CitiesReducer } from "./Cities";
import { WeathersReducer } from "./Weathers";
import { i18nState } from "redux-i18n";

const rootReducer = combineReducers({
  cities: CitiesReducer,
  weathers: WeathersReducer,
  i18nState
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

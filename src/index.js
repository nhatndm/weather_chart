import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux";
import I18n from "redux-i18n";
import { translations } from "./Translations";

ReactDOM.render(
  <Provider store={store}>
    <I18n translations={translations} initialLang="en">
      <App />
    </I18n>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

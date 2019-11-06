import React, { Component, Fragment } from "react";
import { HeaderContainer, FooterContainer } from "./Containers/Layout";
import SelectCitiesContainer from "./Containers/Components/SelectCities";
import "./index.scss";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer />

        <div className="app-content">
          <div className="container app-content-wrapper">
            <SelectCitiesContainer />
          </div>
        </div>

        <FooterContainer />
      </Fragment>
    );
  }
}

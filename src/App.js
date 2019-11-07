import React, { Component, Fragment } from "react";
import { HeaderContainer, FooterContainer } from "./Containers/Layout";
import SelectCitiesContainer from "./Containers/Components/SelectCities";
import SelectDateTimeContainer from "./Containers/Components/SelectDateTime";
import WeathersContainer from "./Containers/Components/Weathers";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import "./index.scss";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer />

        <div className="app-content">
          <div className="container app-content-wrapper">
            <div className="row">
              <div className="col-12 col-md-6">
                <SelectCitiesContainer />
              </div>
              <div className="col-12 col-md-6">
                <SelectDateTimeContainer />
              </div>
            </div>
            <WeathersContainer />
          </div>
        </div>

        <FooterContainer />
      </Fragment>
    );
  }
}

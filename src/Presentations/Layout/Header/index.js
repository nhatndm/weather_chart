import React, { Component } from "react";
import { ReactComponent as CloudyIcon } from "../../../Assets/cloudy.svg";
import { ReactComponent as SelectLanguageIcon } from "../../../Assets/planet-earth.svg";

import "./index.scss";

export default class HeaderPresentation extends Component {
  render() {
    return (
      <div className="app-header">
        <div className="container header-wrapper">
          <div className="row select-language-wrapper">
            <div className="col-12">
              <SelectLanguageIcon className="icon-20" />
              <p className="select-language">Select Language</p>
            </div>
          </div>
          <div className="row brand-wrapper">
            <div className="col-md-4 col-sm-12 header-icon-wrapper">
              <CloudyIcon className="icon-64" />
              <p className="web-title">Weather</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

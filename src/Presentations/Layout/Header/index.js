import React, { Component } from "react";
import { ReactComponent as CloudyIcon } from "../../../Assets/cloudy.svg";
import SelectLanguage from "../../../Containers/Components/SelectLanguage";
import "./index.scss";
import PropTypes from "prop-types";

export default class HeaderPresentation extends Component {
  static contextTypes = {
    t: PropTypes.func
  };

  render() {
    return (
      <div className="app-header">
        <div className="container header-wrapper">
          <SelectLanguage />
          <div className="row brand-wrapper">
            <div className="col-md-12 col-sm-12 header-icon-wrapper">
              <CloudyIcon className="icon-64" />
              <p className="web-title">{this.context.t("Weather")}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

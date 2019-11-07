import React, { Component } from "react";
import Select from "react-select";
import "./index.scss";
import PropTypes from "prop-types";

export default class SelectCitiesPresentation extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  static contextTypes = {
    t: PropTypes.func
  };

  handleSelect(item) {
    this.props.handleSelect(item);
  }

  render() {
    const { cities = [] } = this.props;
    return (
      <div className="select-city">
        <p className="select-city-title">{this.context.t("select_city")}</p>
        <div className="row">
          <div className="col-12 col-md-8">
            {cities.length !== 0 ? (
              <Select
                options={cities}
                isSearchable
                defaultValue={cities[0]}
                onChange={this.handleSelect}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

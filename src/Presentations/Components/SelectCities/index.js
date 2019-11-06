import React, { Component } from "react";
import Select from "react-select";

export default class SelectCitiesPresentation extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(item) {
    this.props.handleSelect(item);
  }

  render() {
    const { cities = [] } = this.props;
    return (
      <div className="select-city">
        <p className="select-city-title">Cities</p>
        {cities.length !== 0 ? (
          <Select
            options={cities}
            isSearchable
            isClearable
            defaultValue={cities[0]}
            onChange={this.handleSelect}
          />
        ) : null}
      </div>
    );
  }
}

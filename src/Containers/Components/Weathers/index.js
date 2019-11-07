import React, { Component } from "react";
import WeathersPresentation from "../../../Presentations/Components/Weathers";
import { connect } from "react-redux";

class WeathersContainer extends Component {
  render() {
    const { timesChart, temps, pressures, error } = this.props;
    return (
      <WeathersPresentation
        timesChart={timesChart}
        temps={temps}
        pressures={pressures}
        error={error}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    timesChart: state.weather.timesChart,
    temps: state.weather.temps,
    pressures: state.weather.pressures,
    error: state.weather.error
  };
};

export default connect(
  mapStateToProps,
  null
)(WeathersContainer);

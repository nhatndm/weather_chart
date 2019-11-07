import React, { Component } from "react";
import { connect } from "react-redux";
import SelectDateTimePresentation from "../../../Presentations/Components/SelectDateTime";
import { selectDate, saveDataForChart } from "../../../Redux/Weathers";

class SelectDateTimeContainer extends Component {
  constructor(props) {
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(date) {
    const { selectDate, originalData, saveDataForChart } = this.props;

    selectDate(date);
    saveDataForChart(originalData, date);
  }

  render() {
    const { times } = this.props;
    return (
      <SelectDateTimePresentation
        times={times}
        onDateChange={this.handleDateChange}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    times: state.weather.times,
    originalData: state.weather.originalData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectDate: date => dispatch(selectDate(date)),
    saveDataForChart: (timeCharts, temps, pressures) =>
      dispatch(saveDataForChart(timeCharts, temps, pressures))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectDateTimeContainer);

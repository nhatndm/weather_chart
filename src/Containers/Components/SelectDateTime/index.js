import React, { Component } from "react";
import { connect } from "react-redux";
import SelectDateTimePresentation from "../../../Presentations/Components/SelectDateTime";

class SelectDateTimeContainer extends Component {
  render() {
    const { times } = this.props;
    return <SelectDateTimePresentation times={times} />;
  }
}

const mapStateToProps = state => {
  return {
    times: state.weather.times
  };
};

export default connect(
  mapStateToProps,
  null
)(SelectDateTimeContainer);

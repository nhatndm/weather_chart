import React, { Component } from "react";
import WeathersPresentation from "../../../Presentations/Components/Weathers";
import { connect } from "react-redux";

class WeathersContainer extends Component {
  render() {
    const { data } = this.props;
    return <WeathersPresentation data={data} />;
  }
}

const mapStateToProps = state => {
  return {
    data: state.weather.data
  };
};

export default connect(
  mapStateToProps,
  null
)(WeathersContainer);

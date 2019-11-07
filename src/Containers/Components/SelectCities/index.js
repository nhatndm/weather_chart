import React, { Component } from "react";
import { connect } from "react-redux";
import { asyncFetchCities } from "../../../Redux/Cities";
import { asyncFetchWeathers } from "../../../Redux/Weathers";
import SelectCitiesPresentations from "../../../Presentations/Components/SelectCities";

class SelectCitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    this.props.fetchCities();
  }

  handleSelect(item) {
    const { selectedDate, asyncFetchWeathers } = this.props;
    asyncFetchWeathers(item.value, selectedDate);
  }

  render() {
    const { cities } = this.props;
    return (
      <SelectCitiesPresentations
        cities={cities}
        handleSelect={this.handleSelect}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.city.cities,
    selectedDate: state.weather.selectedDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCities: () => dispatch(asyncFetchCities()),
    asyncFetchWeathers: (cityId, selectedDate) =>
      dispatch(asyncFetchWeathers(cityId, selectedDate))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectCitiesContainer);

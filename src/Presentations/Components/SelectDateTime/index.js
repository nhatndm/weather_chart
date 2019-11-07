import React, { Component } from "react";
import "./index.scss";
import PropTypes from "prop-types";
import { SingleDatePicker } from "react-dates";
import moment from "moment";

export default class SelectDateTimePresentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      date: moment()
    };
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.outSideRange = this.outSideRange.bind(this);
  }

  static contextTypes = {
    t: PropTypes.func
  };

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  onDateChange(date) {
    this.setState({ date });
  }

  outSideRange(date) {
    const { times } = this.props;
    const firstTime = times[0];
    const lastTime = times[times.length - 1];
    if (moment(firstTime).isAfter(date) || moment(lastTime).isBefore(date)) {
      return true;
    }

    return false;
  }

  render() {
    const { times = [] } = this.props;
    return (
      <div className="select-city">
        <p className="select-city-title">{this.context.t("select_datetime")}</p>
        <div className="row">
          <div className="col-12 col-md-4">
            <SingleDatePicker
              numberOfMonths={1}
              onDateChange={this.onDateChange}
              onFocusChange={this.onFocusChange}
              focused={this.state.focused}
              date={this.state.date}
              hideKeyboardShortcutsPanel
              isOutsideRange={this.outSideRange}
              showDefaultInputIcon
              disabled={times.length === 0}
            />
          </div>
        </div>
      </div>
    );
  }
}

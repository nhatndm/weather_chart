import React, { Component } from "react";
import "./index.scss";
import PropTypes from "prop-types";

export default class WeathersPresentation extends Component {
  static contextTypes = {
    t: PropTypes.func
  };

  render() {
    const { data } = this.props;

    // const options = {
    //   stroke: {
    //     width: [0, 4]
    //   },
    //   title: {
    //     text: "Traffic Sources"
    //   },
    //   labels: times,
    //   xaxis: {
    //     type: "datetime"
    //   },
    //   yaxis: [
    //     {
    //       title: {
    //         text: "Pressure"
    //       }
    //     },
    //     {
    //       opposite: true,
    //       title: {
    //         text: "Temperature"
    //       }
    //     }
    //   ]
    // };

    // const series = [
    //   {
    //     name: "Pressure",
    //     type: "column",
    //     data: pressures
    //   },
    //   {
    //     name: "Temperature",
    //     type: "line",
    //     data: temps
    //   }
    // ];

    return (
      <div className="weather">
        <p className="weather-title">{this.context.t("weather_chart")}</p>
        <div className="row">
          <div className="col-12">
            {/* {data.length !== 0 ? (
              <ComposedChart
                width={1000}
                height={400}
                data={data}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pressure" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="temp" stroke="#ff7300" />
              </ComposedChart>
            ) : null} */}
          </div>
        </div>
      </div>
    );
  }
}

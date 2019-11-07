import React, { Component } from "react";
import "./index.scss";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";

const Error = ({ err }) => (
  <div className="alert alert-danger" role="alert">
    {err}
  </div>
);

export default class WeathersPresentation extends Component {
  static contextTypes = {
    t: PropTypes.func
  };

  render() {
    const { timesChart, temps, pressures, error } = this.props;

    const data = {
      datasets: [
        {
          label: this.context.t("temps"),
          type: "line",
          data: temps,
          fill: false,
          borderColor: "#EC932F",
          backgroundColor: "#EC932F",
          pointBorderColor: "#EC932F",
          pointBackgroundColor: "#EC932F",
          pointHoverBackgroundColor: "#EC932F",
          pointHoverBorderColor: "#EC932F",
          yAxisID: "y-axis-2"
        },
        {
          type: "bar",
          label: this.context.t("pressure"),
          data: pressures,
          fill: false,
          backgroundColor: "#71B37C",
          borderColor: "#71B37C",
          hoverBackgroundColor: "#71B37C",
          hoverBorderColor: "#71B37C",
          yAxisID: "y-axis-1"
        }
      ]
    };

    const options = {
      responsive: true,
      tooltips: {
        mode: "label"
      },
      elements: {
        line: {
          fill: false
        }
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: false
            },
            labels: timesChart
          }
        ],
        yAxes: [
          {
            type: "linear",
            display: true,
            position: "left",
            id: "y-axis-1",
            gridLines: {
              display: false
            },
            labels: {
              show: true
            }
          },
          {
            type: "linear",
            display: true,
            position: "right",
            id: "y-axis-2",
            gridLines: {
              display: false
            },
            labels: {
              show: true
            }
          }
        ]
      }
    };

    return (
      <div className="weather">
        <p className="weather-title">{this.context.t("weather_chart")}</p>
        {error.length !== 0 ? <Error err={error} /> : null}
        <div className="row">
          <div className="col-12">
            {timesChart.length !== 0 ? (
              <Bar data={data} options={options} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

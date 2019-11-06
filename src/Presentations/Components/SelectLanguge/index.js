import React, { Component } from "react";
import { ReactComponent as SelectLanguageIcon } from "../../../Assets/planet-earth.svg";
import { ReactComponent as USIcon } from "../../../Assets/united-states-of-america.svg";
import { ReactComponent as FRicon } from "../../../Assets/france.svg";
import { ReactComponent as VnIcon } from "../../../Assets/vietnam.svg";
import { ReactComponent as CloseIcon } from "../../../Assets/cross.svg";

import "./index.scss";

const LanguageItem = ({ Icon, isActive, title, onClick }) => (
  <div
    className={`language-list-item ${isActive ? "active" : ""}`}
    onClick={onClick}
  >
    <Icon className="icon-20" />
    <p className="nationality">{title}</p>
  </div>
);

export default class SelectLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: "close-modal",
      languages: [
        {
          id: "en",
          active: true,
          icon: USIcon,
          title: "English"
        },
        {
          id: "fr",
          active: false,
          icon: FRicon,
          title: "French"
        },
        {
          id: "vn",
          active: false,
          icon: VnIcon,
          title: "Vietnamese"
        }
      ]
    };
  }

  toogleModalSelectLanguage = status => e => {
    this.setState({ modalStatus: status });
  };

  handleChangeLanguage = id => e => {
    const { setLanguage } = this.props;

    this.setState(state => {
      const langugages = state.languages.map(v => {
        if (v.id === id) {
          v.active = true;
        } else {
          v.active = false;
        }

        return v;
      });

      setLanguage(id);

      return {
        languages: langugages
      };
    });
  };

  render() {
    const { modalStatus, languages } = this.state;
    return (
      <div className="select-language">
        <div className="row select-language-wrapper">
          <div
            className="col-12"
            onClick={this.toogleModalSelectLanguage("open-modal")}
          >
            <SelectLanguageIcon className="icon-20" />
            <p className="select-language-title">Select Language</p>
          </div>
        </div>
        <div className={`select-language-modal ${modalStatus}`}>
          <div className="language-list">
            <CloseIcon
              className="icon-30 close-icon"
              onClick={this.toogleModalSelectLanguage("close-modal")}
            />
            {languages.map(v => (
              <LanguageItem
                key={v.id}
                Icon={v.icon}
                isActive={v.active}
                title={v.title}
                onClick={this.handleChangeLanguage(v.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

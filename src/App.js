import React, { Component, Fragment } from "react";
import { HeaderContainer, FooterContainer } from "./Containers/Layout";
import "./index.scss";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer />

        <div className="container">This is app content</div>

        <FooterContainer />
      </Fragment>
    );
  }
}

import React, { Component } from "react";
import SelectLanguagePresentations from "../../../Presentations/Components/SelectLanguge";
import { connect } from "react-redux";
import { setLanguage } from "redux-i18n";

class SelectLanguageContainer extends Component {
  render() {
    const { setLanguage } = this.props;
    return <SelectLanguagePresentations setLanguage={setLanguage} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLanguage: lang => dispatch(setLanguage(lang))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SelectLanguageContainer);

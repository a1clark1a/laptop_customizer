import React, { Component } from "react";
import Options from "./Options";

class CustomizeList extends Component {
  render() {
    const { features, selected, currency, handleUpdateFeature } = this.props;
    console.log(features);
    const renderFeatures = Object.keys(features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      console.log(feature);
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <Options
            features={features}
            feature={feature}
            selected={selected}
            currency={currency}
            handleUpdateFeature={handleUpdateFeature}
          />
        </fieldset>
      );
    });
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {renderFeatures}
      </form>
    );
  }
}

CustomizeList.defaultProps = {
  features: {}
};

export default CustomizeList;

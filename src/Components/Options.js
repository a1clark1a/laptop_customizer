import React from "react";
import { Component } from "react";
import slugify from "slugify";

class Options extends Component {
  render() {
    const {
      features,
      feature,
      selected,
      currency,
      handleUpdateFeature
    } = this.props;

    const options = features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === selected[feature].name}
            onChange={e => handleUpdateFeature(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({currency.format(item.cost)})
          </label>
        </div>
      );
    });
    return <>{options}</>;
  }
}

export default Options;

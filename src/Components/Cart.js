import React from "react";
import { Component } from "react";
import Total from "./Total";

class Cart extends Component {
  render() {
    const { currency, selected } = this.props;
    const summary = Object.keys(selected).map((feature, idx) => {
      //Price Component
      const featureHash = feature + "-" + idx;
      const selectedOption = selected[feature];
      console.log(selectedOption);
      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {currency.format(selectedOption.cost)}
          </div>
        </div>
      );
    });
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <Total currency={currency} selected={selected} />
      </section>
    );
  }
}

Cart.defaultProps = {
  selected: {}
};

export default Cart;

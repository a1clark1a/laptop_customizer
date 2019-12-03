import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Cart from "./Cart";

describe("Cart Component", () => {
  //Test state
  const state = {
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  //test format
  const USCurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Cart currency={USCurrencyFormat} selected={state.selected} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders given no items", () => {
    const wrapper = shallow(<Cart />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

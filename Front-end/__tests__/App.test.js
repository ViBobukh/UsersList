import React from "react";
import renderer from "react-test-renderer";

import App from "../src/Components/App/App";

describe("App test", () => {
  it("App render", () => {
    const component = renderer.create(<App />);
    let domTree = component.toJSON();
    expect(domTree).toMatchSnapshot();
  });
});

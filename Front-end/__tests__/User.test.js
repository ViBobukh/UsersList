import React from "react";
import renderer from "react-test-renderer";
import User from "../src/Components/User/User";

describe("User tests", () => {
  it("Render user", () => {
    const user = {
      id: 1,
      name: "Maks",
      email: "maks@gmail.com",
    };
    const component = renderer.create(<User user={user} />);
    let domTree = component.toJSON();
    expect(domTree).toMatchSnapshot();
  });
});

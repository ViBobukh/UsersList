import React from "react";
import renderer from "react-test-renderer";

import List from "../src/Components/List/List";
import { users } from "../src/lib/hardCode";

describe("List tests", () => {
  it("Render list", () => {
    const component = renderer.create(<List users={users} />);
    const domTree = component.toJSON();
    expect(domTree).toMatchSnapshot();
  });
});

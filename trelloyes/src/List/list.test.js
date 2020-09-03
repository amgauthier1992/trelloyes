import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import List from "./List";
import App from "./App";

describe("List component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("section");
    ReactDOM.render(<List header={list.header}
        cards={list.cardIds.map(
          (id) => this.props.store.allCards[id]
        )/>, section);
    ReactDOM.unmountComponentAtNode(section);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<List />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

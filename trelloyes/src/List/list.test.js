import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import List from "./List";

// Smoke test
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    //use props since List component is expecting header and cards
    <List
      header={"Header"}
      cards={[
        { id: "a", title: "First card", content: "lorem ipsum" },
        { id: "b", title: "Second card", content: "lorem ipsum" },
        { id: "c", title: "Third card", content: "lorem ipsum" },
      ]}
    />,
    div
  );
  //deletes parent div created so as to not use up memory
  ReactDOM.unmountComponentAtNode(div);
});

// Snapshot
it("renders a dummy list of cards as expected", () => {
  const tree = renderer
    .create(
      <List
        header={"Header"}
        cards={[
          { id: "a", title: "First card", content: "lorem ipsum" },
          { id: "b", title: "Second card", content: "lorem ipsum" },
          { id: "c", title: "Third card", content: "lorem ipsum" },
        ]}
      />
    )
    .toJSON(); //not converting it to JSON its converting it to HTML. 
  expect(tree).toMatchSnapshot(); //tree is our actual component
});

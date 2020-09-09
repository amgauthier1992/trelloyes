import React from "react";
import "./App.css";
import List from "./../List/List";
import Card from "./../Card/Card";

class App extends React.Component {
  state = {
    lists: [
      {
        id: "1",
        header: "First list",
        cardIds: ["a", "b", "e", "f", "g", "j", "l", "m"],
      },
      {
        id: "2",
        header: "Second list",
        cardIds: ["b", "c", "d", "f", "h", "i", "k"],
      },
      {
        id: "3",
        header: "Third list",
        cardIds: [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
        ],
      },
      {
        id: "4",
        header: "Fourth list",
        cardIds: ["l", "m"],
      },
    ],
    allCards: {
      a: { id: "a", title: "First card", content: "lorem ipsum" },
      b: { id: "b", title: "Second card", content: "lorem ipsum" },
      c: { id: "c", title: "Third card", content: "lorem ipsum" },
      d: { id: "d", title: "Fourth card", content: "lorem ipsum" },
      e: { id: "e", title: "Fifth card", content: "lorem ipsum" },
      f: { id: "f", title: "Sixth card", content: "lorem ipsum" },
      g: { id: "g", title: "Seventh card", content: "lorem ipsum" },
      h: { id: "h", title: "Eighth card", content: "lorem ipsum" },
      i: { id: "i", title: "Ninth card", content: "lorem ipsum" },
      j: { id: "j", title: "Tenth card", content: "lorem ipsum" },
      k: { id: "k", title: "Eleventh card", content: "lorem ipsum" },
      l: { id: "l", title: "Twelfth card", content: "lorem ipsum" },
      m: { id: "m", title: "Thirteenth card", content: "lorem ipsum" },
    },
  };
  }
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.props.store.lists.map((list, index) => {
            return (
              <section key={index}>
                <List
                  header={list.header}
                  cards={list.cardIds.map(
                    (id) => this.props.store.allCards[id] //bracket notation to grab a key from the allCards object
                  )}
                  //checking the allCards object id against the cardIds array. Return an array of card objects corresponding to the cardIds that are matched.
                />
              </section>
            );
          })}
        </div>
      </main>
    );
  }
}

// app->list->card

export default App;

//"this" is the object executing the current function(render). The object is the store object which is passed through as a prop on Line 9 of index.js.

//Line 13- iterate through store.lists array rendering a list component for each list(total of 4 in the array).
//Passing in the prop values of list.header and list.cardIds to the list component.

//also, you're going to want to pass more props to List, if you want access to the cards

//so you'll need to find a way to use the cardIds to get the full list of cards

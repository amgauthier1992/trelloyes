import React from "react";
import "./App.css";
import List from "./../List/List";

class App extends React.Component {
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
                    (id) => this.props.store.allCards[id]
                  )}
                />
              </section>
            );
          })}
        </div>
      </main>
    );
  }
}

export default App;

//Line 15- iterate through store.lists array rendering a list component for each list(total of 4 in the array).
//Passing in the prop values of list.header and list.cardIds to the list component.

//also, you're going to want to pass more props to List, if you want access to the cards

//so you'll need to find a way to use the cardIds to get the full list of cards

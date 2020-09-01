import React from "react";
import "./list.css";

import Card from "./../Card/Card";

class List extends React.Component {
  render() {
    console.log(this.props.cards);
    return (
      <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">
          {this.props.cards.map((card, index) => {
            return (
              <div key={index}>
                <Card title={card.title} content={card.content} />
              </div>
            );
          })}
          <button
            type="button"
            className="List-add-button"
            // onClick={this.props.addCardClicked}
          >
            + Add Random Card
          </button>
        </div>
      </section>
    );
  }
}

export default List;
//iterate through cards rendering a card component

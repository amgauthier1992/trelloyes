import React from "react";
import "./list.css";
import Card from "./../Card/Card";

function List(props) {
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards"></div>
    </section>
  );
}

//iterate through cards rendering a card component

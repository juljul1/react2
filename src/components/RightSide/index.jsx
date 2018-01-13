import React from "react";
import "./styles.css";
import WatchList from "../WatchList";
import Form from "components/Form";
import Buttons from "components/RightSide/Buttons";
export default class RightSide extends React.Component {
  render() {
    const {
      searchField,
      vote_average,
      upcoming,
      popular,
      watchAdd,
      removeMovie
    } = this.props;

    return (
      <section className="RightSide">
        <Form onSubmit={searchField} />
        <Buttons Top={vote_average} Up={upcoming} Popular={popular} />
        <WatchList watchAdd={watchAdd} removeMovie={removeMovie} />
      </section>
    );
  }
}

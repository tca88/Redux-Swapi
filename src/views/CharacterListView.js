import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getSwapiPeople } from "../actions";
// import actions

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getSwapiPeople();
    console.log(this.props.characters);
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      console.log("data is being fetched!");
    }

    console.log("look", this.props);

    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    isFetching: state.charsReducer.isFetching
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    /* action creators go here */
    getSwapiPeople
  }
)(CharacterListView);

import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderedList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="content">{song.title}</div>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    // this props === {songs: state.songs}
    // console.log(this.props);
    return (
      <div className="ui segment">
        <div className="ui divided list">{this.renderedList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  //{ selectSong: selectSong }
  { selectSong }
)(SongList);

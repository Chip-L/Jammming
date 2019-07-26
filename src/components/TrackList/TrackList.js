import React from 'react';
import {Track} from '../Track/Track';

import './TrackList.css';

export class TrackList extends React.Component {
  render() {
    let listOfTracks;
    if(this.props.tracklist) {
      listOfTracks = this.props.tracklist.map((track) => {
        return(
          <Track
            key={track.id}
            trackInfo={track}
            onAdd={this.props.onAdd}
            isRemoval={this.props.isRemoval}
          />
        );
      });
    };

    return (
      <div className="TrackList">
        {listOfTracks}
      </div>
    );
  }
};

/*        {this.props.tracklist.map((track) => {
  return(
    <Track trackInfo={track} key={track.id} />
  );
})} */

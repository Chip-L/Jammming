import React from 'react';
import {TrackList} from '../TrackList/TrackList';
import './Playlist.css';

export class Playlist extends React.Component {
/*
  constructor() {

  }
*/

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} />
        <TrackList tracklist={this.props.playListTracks}/>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
};

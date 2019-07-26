import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';

import './App.css';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      playListName: 'New Playlist',
      playListTracks: [{name: 'Material Girl',
                        artist: 'Madonna',
                        album: 'Like a Virgin',
                        id: 1},
                       {name: 'Like a Virgin',
                        artist: 'Madonna',
                        album: 'Like a Virgin',
                        id: 2}],
      searchResults: [{name: 'Material Girl 3',
                       artist: 'Madonna',
                       album: 'Like a Virgin',
                       id: 3},
                      {name: 'Like a Virgin 4',
                       artist: 'Madonna',
                       album: 'Like a Virgin',
                       id: 4}],

    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack =  this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let trackList = this.state.playListTracks;

    if(!trackList.find((savedTrack) => savedTrack.id === track.id)) {
      trackList.push(track);
      this.setState({playlist: trackList});
    };
  }

  removeTrack(track) {
    let trackList =
      this.state.playListTracks.filter(listTrack => listTrack.id !== track.id);

    this.setState({playListTracks: trackList});
  }

  updatePlaylistName(name) {
    this.setState({playListName: name});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar /  >
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playListName={this.state.playListName}
              playListTracks={this.state.playListTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
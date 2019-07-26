import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';

import './App.css';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      playListName: 'Chip\'s Play List',
      playListTracks: [{name: 'Material Girl',
                        artist: 'Madonna',
                        album: 'Like a Virgin',
                        id: 1},
                       {name: 'Like a Virgin',
                        artist: 'Madonna',
                        album: 'Like a Virgin',
                        id: 2}],
      searchResults: [{name: 'Material Girl',
                       artist: 'Madonna',
                       album: 'Like a Virgin',
                       id: 1},
                      {name: 'Like a Virgin',
                       artist: 'Madonna',
                       album: 'Like a Virgin',
                       id: 2}],

    };

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    let trackList = this.state.searchResults;

    if(!trackList.find((savedTrack) => savedTrack.id === track.id)) {
      trackList.push(track);
      this.setState({searchResults: trackList});
    };
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar /  >
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playListName={this.state.playListName} playListTracks={this.state.playListTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

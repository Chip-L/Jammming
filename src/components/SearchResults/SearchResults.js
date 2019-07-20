import React from 'react';
import {TrackList} from '../TrackList/TrackList';

import './SearchResults.css';

export class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracklist={this.props.searchResults} />
      </div>
    );
  }
};

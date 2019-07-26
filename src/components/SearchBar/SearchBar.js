import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleTermChange(e) {
    let term = e.target.value;
    this.setState({ term: term });
  }

  search() {
    this.props.onSearch(this.state.term)
  }

  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton" onClick={this.search}>SEARCH</button>
      </div>
    );
  }
};

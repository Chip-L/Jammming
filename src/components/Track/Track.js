import React from 'react';

import './Track.css';

export class Track extends React.Component {
  constructor(props) {
    super(props);

    this.renderAction = this.renderAction.bind(this);
  }

  renderAction() {
    if(this.props.isRemoval) {
      return '-';
    } else {
      return '+';
    };
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3> {this.props.trackInfo.name} </h3>
          <p> {this.props.trackInfo.artist} | {this.props.trackInfo.album} </p>
        </div>
        <button className="Track-action" >{this.renderAction}</button>
      </div>
    );
  }
};
/*
*/

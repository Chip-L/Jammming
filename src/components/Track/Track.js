import React from 'react';

import './Track.css';

export class Track extends React.Component {
  constructor(props) {
    super(props);

    this.renderAction = this.renderAction.bind(this);

    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
  }

  addTrack(event) {
    this.props.onAdd(this.props.trackInfo);
  }

  removeTrack(event) {
    this.props.onRemove(this.props.trackInfo);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return  <a className="Track-action" onClick={this.removeTrack} >-</a>;
    };
    return <a className="Track-action" onClick={this.addTrack} >+</a>;
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3> {this.props.trackInfo.name} </h3>
          <p> {this.props.trackInfo.artist} | {this.props.trackInfo.album} </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
};
/*
*/

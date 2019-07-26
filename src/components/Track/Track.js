import React from 'react';

import './Track.css';

export class Track extends React.Component {
  constructor(props) {
    super(props);

    this.renderAction = this.renderAction.bind(this);

    this.addTrack=this.addTrack.bind(this);
  }

  addTrack(e) {
//    let track = e.target.value;
//    console.log('track: ' + this.props.trackInfo);
    this.props.onAdd(this.props.trackInfo);
  }

  removeTrack(e) {
    this.props.onRemove(this.props.trackInfo);
  }

  renderAction() {
    if(this.props.isRemoval) {
      return <button className="Track-action" onClick={this.removeTrack} >-</button>;
    } else {
      return <button className="Track-action" onClick={this.addTrack}>+</button>;
    };
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

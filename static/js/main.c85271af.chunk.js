(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),s=(a(15),a(1)),o=a(2),l=a(5),u=a(3),m=a(6),p=a(4),d=(a(16),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"SearchBar"},r.a.createElement("input",{placeholder:"Enter A Song, Album, or Artist"}),r.a.createElement("button",{className:"SearchButton"},"SEARCH"))}}]),t}(r.a.Component)),h=(a(17),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).renderAction=a.renderAction.bind(Object(m.a)(a)),a.addTrack=a.addTrack.bind(Object(m.a)(a)),a.removeTrack=a.removeTrack.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"addTrack",value:function(e){this.props.onAdd(this.props.trackInfo)}},{key:"removeTrack",value:function(e){this.props.onRemove(this.props.trackInfo)}},{key:"renderAction",value:function(){return this.props.isRemoval?r.a.createElement("a",{className:"Track-action",onClick:this.removeTrack},"-"):r.a.createElement("a",{className:"Track-action",onClick:this.addTrack},"+")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Track"},r.a.createElement("div",{className:"Track-information"},r.a.createElement("h3",null," ",this.props.trackInfo.name," "),r.a.createElement("p",null," ",this.props.trackInfo.artist," | ",this.props.trackInfo.album," ")),this.renderAction())}}]),t}(r.a.Component)),k=(a(18),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t=this;return this.props.tracklist&&(e=this.props.tracklist.map(function(e){return r.a.createElement(h,{key:e.id,trackInfo:e,onAdd:t.props.onAdd,onRemove:t.props.onRemove,isRemoval:t.props.isRemoval})})),r.a.createElement("div",{className:"TrackList"},e)}}]),t}(r.a.Component)),b=(a(19),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"SearchResults"},r.a.createElement("h2",null,"Results"),r.a.createElement(k,{tracklist:this.props.searchResults,onAdd:this.props.onAdd,isRemoval:!1}))}}]),t}(r.a.Component)),v=(a(20),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Playlist"},r.a.createElement("input",{defaultValue:"New Playlist"}),r.a.createElement(k,{tracklist:this.props.playListTracks,onRemove:this.props.onRemove,isRemoval:!0}),r.a.createElement("button",{className:"Playlist-save"},"SAVE TO SPOTIFY"))}}]),t}(r.a.Component)),f=(a(21),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={playListName:"Chip's Play List",playListTracks:[{name:"Material Girl",artist:"Madonna",album:"Like a Virgin",id:1},{name:"Like a Virgin",artist:"Madonna",album:"Like a Virgin",id:2}],searchResults:[{name:"Material Girl 3",artist:"Madonna",album:"Like a Virgin",id:3},{name:"Like a Virgin 4",artist:"Madonna",album:"Like a Virgin",id:4}]},a.addTrack=a.addTrack.bind(Object(m.a)(a)),a.removeTrack=a.removeTrack.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"addTrack",value:function(e){var t=this.state.playListTracks;t.find(function(t){return t.id===e.id})||(t.push(e),this.setState({playlist:t}))}},{key:"removeTrack",value:function(e){var t=this.state.playListTracks.filter(function(t){return t.id!==e.id});this.setState({playListTracks:t})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Ja",r.a.createElement("span",{className:"highlight"},"mmm"),"ing"),r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement("div",{className:"App-playlist"},r.a.createElement(b,{searchResults:this.state.searchResults,onAdd:this.addTrack}),r.a.createElement(v,{playListName:this.state.playListName,playListTracks:this.state.playListTracks,onRemove:this.removeTrack}))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.c85271af.chunk.js.map
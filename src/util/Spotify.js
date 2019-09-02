const CLIENT_ID = '40c59d9bef634095adc0ebb686cb292e';
const REDIRECT_URI = 'http://localhost:3000/';

let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    };

    //check local URL to see if we just requested the token
    let accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    let expiresInMatch =  window.location.href.match(/expires_in=([^&]*)/);

    //if the tokens DO NOT exist, then get them from spotify
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1]; //set the access tokens
      let expiresIn = Number(expiresInMatch[1]); // cast the text as a Number

      window.setTimeout(() => {accessToken = ''}, expiresIn * 1000); //*1000 to remove milliseconds
      window.history.pushState('Access Token', null, '/');

      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
      window.location = accessUrl;
    }

  }, // .getAccessToken

  search(term) {
    const accessToken = this.getAccessToken(); // move this to local scope - fetches token
    const cleanTerm = term.replace(' ', '%20'); // no spaces

    return fetch(
      `https://api.spotify.com/v1/search?q=${cleanTerm}&type=track`,
        { headers:
          {Authorization: `Bearer ${accessToken}`}
        }
    ).then((response) => {
      if (response.ok) {
        return response.json();
      };
      throw new Error ('Request failed');
    }, networkError => {console.log(networkError.message);}
    ).then(jsonResponse => {
      let tracks = [];
      if(jsonResponse.tracks.items.length > 0) {
        tracks = jsonResponse.tracks.items.map(
          track => (
            {
              id: track.id,
              name: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              uri: track.uri,
            }
          )
        );
        };
        return tracks;
      }
    );
  }, // .search

  savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userID;

    return fetch(
      'https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(
      jsonResponse => {
        userID = jsonResponse.id;
        return fetch(
          `https://api.spotify.com/v1/users/${userID}/playlists`,
          {
            headers: headers,
            method: 'POST',
            body: JSON.stringify(
              {name: name}
            )
          }
        ).then(
          response => response.json()
        ).then(
          jsonResponse => {
            const playlistID = jsonResponse.id;
            return fetch(
              `https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
              {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({uris: trackUris})
              }
            );
          }
        );
      }
    );
  }, // .savePlaylist

}; // Spotify

export default Spotify;

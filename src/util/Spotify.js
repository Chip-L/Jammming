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

    return fetch(`https://api.spotify.com/v1/search?q=${cleanTerm}&type=track`,
        { headers:
          {Authorization: `Bearer ${accessToken}`}
        }
      ).then((response) => {
          if (response.ok) {
            return response.json();
          };
          throw new Error ('Request failed');
        }, networkError => {
          console.log(networkError.message);
        }
      ).then(jsonResponse => {
        let tracks = [];
        if(jsonResponse.tracks.items.length > 0) {
          tracks = jsonResponse.tracks.items.map(track => ({
              id: track.id,
              name: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              uri: track.uri,
            })
          );
        };
        return tracks;
      });


  }, // .search
}; // Spotify

export default Spotify;


/*
// copied from Codecademy page
const clientId = 'fb7d40f7652e4d2e957e1eaba5b4aaa9'; // Insert client ID here.
const redirectUri = 'http://jammming.s3-website-us-east-1.amazonaws.com/'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.

let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },

  savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: name})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackUris})
        });
      });
    });
  }
};

export default Spotify;
*/

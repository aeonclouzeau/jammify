let accessToken = "";
const clientID = "f35f548e116b43579f4afb64ecb18afc";
const redirectURI = "http://localhost:3000/";
const Spotify = {
	getAccessToken() {
		if (accessToken) {
			return accessToken;
		}
		// Implicit Grant Flow
		const urlAccessToken = window.location.href.match(/access_token=([^&]*)/); // gets the access token from the url
		const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/); // gets the expiration time for the url

		if (urlAccessToken && urlExpiresIn) {
			accessToken = urlAccessToken[1];
			const expiresIn = Number(urlExpiresIn[1]);
			// Access token expiration
			window.setTimeout(() => (accessToken = ""), expiresIn * 1000); // clears the value of the access token after `expiresIn` seconds
			window.history.pushState("Access Token", null, "/"); // Removes the access token from the URL
		} else {
			// Will redirect the user to a login screen to get a new token
			const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
			window.location = redirect;
		}
	},

	search(term) {
		const accessToken = Spotify.getAccessToken();
		// 1st argument is the endpoint, 2nd argument is the header of the GET request
		return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})
			.then((response) => {
				return response.json();
			})
			.then((jsonResponse) => {
				if (!jsonResponse.tracks) {
					return [];
				}
				return jsonResponse.tracks.items.map((track) => ({
					id: track.id,
					name: track.name,
					artist: track.artists[0].name,
					album: track.album.name,
					uri: track.uri,
				}));
			});
	},
};

export { Spotify };

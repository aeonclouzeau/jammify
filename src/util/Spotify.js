let accessToken = "";
const clientID = "f35f548e116b43579f4afb64ecb18afc";
const redirectURI = "http://localhost:3000/";
const Spotify = {
	getAccessToken() {
		if (accessToken) {
			return accessToken;
		}
		// Implicit Grant Flow
		const urlAccessToken = window.location.href.match(/access_token=([^&]*)/); // gets the access token from the request
		const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/); // gets the expiration time for the token

		if (urlAccessToken && urlExpiresIn) {
			accessToken = urlAccessToken[1];
			const expiresIn = Number(urlExpiresIn[1]);
			// access token expiration
			window.setTimeout(() => (accessToken = ""), expiresIn * 1000); // clears the value of access token after 1000 miliseconds
			window.history.pushState("Access Token", null, "/"); // Removes access token from url
		} else {
			const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
			window.location = redirect;
		}
	},
};

export { Spotify };

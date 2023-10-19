const accessToken = "";
const Spotify = {
	getAccessToken() {
		if (accessToken) {
			return accessToken;
		}
		// Implicit Grant Flow
		window.location.href.match(/access_token=([^&]*)/); // gets the access token from the request
		window.location.href.match(/expires_in=([^&]*)/); // gets the expiration time for the token
	},
};

export { Spotify };

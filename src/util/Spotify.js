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
			const expires_in = Number(urlExpiresIn[1]);
		}
	},
};

export { Spotify };

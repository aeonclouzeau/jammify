const accessToken = "";
const Spotify = {
	getAccessToken() {
		if (accessToken) {
			return accessToken;
		}
	},
};

export { Spotify };

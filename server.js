console.log("Starting server...");



const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const app = express();
const port = 3000;




app.use(cors());

// Spotify API setup
const spotifyApi = new SpotifyWebApi({
  clientId: '0386e8e0c544470780996492fec0aa33', // Replace with your client ID
  clientSecret: '318fb5011f584c96bb8e3c2909f646d9' // Replace with your client secret
});

app.get('/request-token', async (req, res) => {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body['access_token']);
    res.send({ accessToken: data.body['access_token'] });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});






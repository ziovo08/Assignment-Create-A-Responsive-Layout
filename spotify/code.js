document.getElementById('request-token').addEventListener('click', function() {
  fetch('http://localhost:3000/request-token') // Corrected URL
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
      })
      .then(data => {
          console.log('Access Token:', data.accessToken);
      })
      .catch(error => {
          console.error('Error fetching access token:', error);
      });
});

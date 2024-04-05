fetch('http://localhost:3000/request-token')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the response data
  })
  .catch(error => {
    console.error('Error:', error); // Log any errors
  });

  console.log("does this work");
// fetch POST

fetch('https://api-to-call.com/endpoint', { // sends request
  method: 'POST',
  body: JSON.stringify({id: '200'})
}).then(response => {
  if (response.ok) {
    return response.json(); // converts response object to JSON
  }
  throw new Error('Request failed!'); // handles errors
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => { // handles success
  return jsonResponse; // code to execute with jsonResponse
});

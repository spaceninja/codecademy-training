// fetch GET

fetch('https://api-to-call.com/endpoint').then(response => { // sends request
  if(response.ok) {
    return response.json(); // converts response object to JSON
  }
  throw new Error('Request failed!'); // handles errors
}, networkError => console.log(networkError.message)
).then(jsonResponse => { // handles success
    return jsonResponse; // code to execute with jsonResponse
});

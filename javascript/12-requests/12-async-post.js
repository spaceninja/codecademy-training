// async await POST

const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint', { // sends request
      method: 'POST',
      body: JSON.stringify({id: 200})
    });
    if(response.ok) { // handles response if successful
      const jsonResponse = await response.json();
      return jsonResponse; // code to execute with jsonResponse
    }
    throw new Error('Request failed!'); // handles response if unsuccessful
  } catch(error) {
    console.log(error);
  }
}

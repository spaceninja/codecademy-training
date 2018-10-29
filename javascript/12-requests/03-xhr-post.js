// XMLHttpRequest POST

// creates new object
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'}); // converts data to a string

// handles response
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response; // code to execute with response
  }
}

// opens request and sends object
xhr.open('POST', url);
xhr.send(data);

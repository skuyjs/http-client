# @skuyjs/http-client
Client to make HTTP request for NodeJS.

## Usage
Examples of sending an HTTP request with a different request method.

### GET
```javascript
const Client = require('@skuyjs/http-client');

Client
  .get('http://jsonplaceholder.typicode.com/posts/1')
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

```

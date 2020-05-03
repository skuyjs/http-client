const Client = require('../dist');

Client
  .get('http://jsonplaceholder.typicode.com/posts/1')
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

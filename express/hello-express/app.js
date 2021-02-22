const express = require('express');

const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send('hello express');
});

app.get('/wow', (request, response) => {
  response.send('wow express');
});


app.listen(port, () => {
  console.log('Express listening on port', port);
});
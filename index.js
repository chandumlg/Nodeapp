const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
  console.log('this is v1.4.2')
  console.log('this is v1.4.2')
  console.log('this is v1.4.2')
});

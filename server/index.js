const express = require('express');
const app = express();

app.get('/header', (req, res) => {
  res.send('<h1>I am a header!</h1>');
});

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));

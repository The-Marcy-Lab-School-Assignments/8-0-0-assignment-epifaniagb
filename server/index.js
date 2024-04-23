const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('<h1>Welcome home!</h1>');
});

app.get('/about', (req, res, next) => {
  res.send('<p>This is the about page</p>');
});

app.get('/api/data', (req, res, next) => {
  const data = {
    message: 'This is raw data from the server.',
  };
  res.send(data);
});

app.get('/api/filter', (req, res, next) => {
  const filter = req.query.filter;
  const filteredData = {
    message: `This data is filtered by ${filter}.`,
  };
  res.send(filteredData);
});

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));

const express = require('express');
const PORT = 3000;
const app = express();
const users = [
  {
    id: 1,
    username: 'bob',
    name: 'Bob Belcher',
  },
  {
    id: 2,
    username: 'tina',
    name: 'Tina Belcher',
  },
];
app.get('/', function (req, res, next) {
  res.send(`<html>
    <head>
      <title>Homepage!</title>
    </head>
    <body>
      <h1>HOMEPAGE WOO!</h1>
    </body>
  </html>`);
});
app.get('/about', (req, res, next) => {
  res.send(`<html>
  <head>
    <title>Homepage!</title>
  </head>
  <body>
    <h1>This is the about page</h1>
  </body>
</html>`);
});
// Route Parameters (params)
// Query Parameters
app.get('/user/:username', (req, res, next) => {
  const user = users.find((currentUser) => {
    return currentUser.username === req.params.username;
  });
  console.log(req.query.lang);
  let intro = `This is the profile of ${user.name}`;
  if (req.query.lang === 'yoda') {
    intro = `The profile of ${user.name}, this is.`;
  }
  res.send(`<html>
  <head>
    <title>Homepage!</title>
  </head>
  <body>
    <h1>${intro}</h1>
  </body>
</html>`);
});
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
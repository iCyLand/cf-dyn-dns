const express = require('express');
const appconfig = require('dotenv').config();
const app = express();
const port = process.env.NODE_PORT || 3000;

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.get('/', (req, res) => {
  res.send('Hello Dynamic DNS');
})

app.listen(port, () => {
  console.log(`Cloudflare Dynamic DNS server listening on port ${port}!`);
})
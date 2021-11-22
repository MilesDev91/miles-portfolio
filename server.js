/* eslint-disable no-undef */
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.get("*", (req, res) => {
  let url = path.join(__dirname, 'index.html');
  if (!url.startsWith('/app/')) // since we're on local windows
    url = url.substring(1);
  res.sendFile(url, { 'root': '../client/build' });
});

app.listen(port);

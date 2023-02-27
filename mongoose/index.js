// index.js.
require('./db/connect');
const express = require('express');
const blogRouter = require('./routers/blog');

const app = express();
const port = 3000;

app.use(express.json());
app.use(blogRouter);

app.listen(port, () => {
    console.log('ecoute sur port',port);
});
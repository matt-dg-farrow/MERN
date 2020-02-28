const express = require('express');
const app = express();

app.get('/error', (req,res,next) => {
    next(Error("Something's wrong"));
})

app.use((err, req, res, next) => {
    console.log(err.stack);
    next(err);
})

app.use((err, req, res) => {
    res.status(500).send(err.message);
})


const server = app.listen(4000);
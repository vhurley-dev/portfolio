const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const todosRoutes = require('./routes/todos');

const app = express();

mongoose.connect('mongodb+srv://' + process.env.MONGO_ATLAS_USER + ':' + process.env.MONGO_ATLAS_PW + '@cluster0.dv61a.mongodb.net/node-angular?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to database');
    })
    .catch(() => {
        console.log('Connection to database failed')
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS"
    );
    next();
});

app.use("/api/todos", todosRoutes);

module.exports = app;
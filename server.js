require('dotenv').config();
const express = require('express');
const app = express();
const path = require("path");
const {logger} = require("./logger");
const {pressureNetwork} = require('./pressurizers/network');
const {pressureCpu} = require('./pressurizers/cpu')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.SERVER_PORT || 8080;

let promiseExecution = async () => {
    let promise = await Promise.all([
        pressureNetwork(),
        pressureCpu(),
    ]);
    console.log(promise);
};

server = app.listen(port, () => {
    logger.info(`Node server is running on port ${port} at ${new Date()}`);
    logger.info('Starting pressure')
    promiseExecution();
});

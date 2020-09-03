const express = require('express');
const bodyParser = require('body-parser');
const verifyWebhook = require('./verify-webhook');
require('dotenv').config({ path: 'variables.env' });
const messageWebhook = require('./message-webhook');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', messageWebhook);
app.get('/', verifyWebhook);

// app.get('/', (req,res) =>{
//     res.send("ALL OK");
// })

let port = process.env.PORT;
if (port == null || port == "") port = 8000;
app.listen(port, () => console.log(`Express server is listening on port ${port}`));
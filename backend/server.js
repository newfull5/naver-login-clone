const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const db = require('./db/db.js');
const dbc = require('./db/dbConnect.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extendeded: true}));
dbc.connect();


app.get('/api', (req, res) => {
    res.send([
        {
            "id": "dhtocks",
            "password":"1234"
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
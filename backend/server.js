const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extendeded: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            "id": "dhtocks",
            "password":"1234"
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
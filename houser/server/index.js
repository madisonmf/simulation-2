const express = require ('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
})

app.get('/api/houses', (req, res) => {
    console.log("it's werkin");
    req.app.get('db').get_houses().then(houses => {
        res.status(200).json(houses)
    }).catch(err => {
        res.json({ message: "whoops, can't find em" })
    })
})

app.post('/api/houses', (req, res) => {
    console.log("make it werk");
    const data = req.body;
    console.log(data)

    req.app.get('db').add_house([
        data.name,
        data.address,
        data.city,
        data.state,
        data.zip
    ]).then(results => {
        res.status(200).json(results);
    }).catch(err => {
        res.json(err)
    })
})

app.delete('api/houses/:id', (req, res) => {
    const houseIndex = houses.findIndex( house => house.id === deleteID);
    houses.splice(houseIndex, 1);
    res.status(200).send(houses);
})

const port = 4000;
app.listen(port, () => {console.log(`Mad's server listening on port ${port}`)});
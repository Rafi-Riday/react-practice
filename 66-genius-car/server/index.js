const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 6969;
app.use(express());
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wh08fua.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async () => { };
run().catch(err => console.error(err));

app.get('/', (req, res) => {
    res.send(JSON.stringify({ status: true, msg: 'App is running' }));
});

app.listen(port, () => console.log(`App is running on http://localhost:${port}`));
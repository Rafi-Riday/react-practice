const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 6969;

// db
const uri = "mongodb+srv://dbname1:OMLBpBNF9C4ZMw37@cluster0.wh08fua.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        const userCollection = client.db("database1").collection("users");

        app.post('/users', async (req, res) => {
            const { name, email } = req.body;
            const result = await userCollection.insertOne({ name, email });
            const cursor = userCollection.find({});
            const users = await cursor.toArray();
            res.send(users);
        });

        app.get('/users', async (req, res) => {
            const cursor = userCollection.find({});
            const users = await cursor.toArray();
            res.send(users);
        });
    }
    finally { }
};

run().catch(err => console.error(err));

app.get('/', (req, res) => {
    res.send(JSON.stringify({ status: true, message: 'API running', }));
});

app.listen(port, () => {
    console.log(`Running on port http://localhost:${port}`);
});

/*
dbname1
OMLBpBNF9C4ZMw37
*/
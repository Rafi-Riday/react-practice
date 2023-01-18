const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 6969;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://dbname1:OMLBpBNF9C4ZMw37@cluster0.wh08fua.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const run = async () => {
    try {
        const userCollection = client.db('database1').collection('users2');

        const sendUsers = async (res) => {
            const cursor = userCollection.find({});
            const users = await cursor.toArray();
            res.send(users);
        }

        app.get('/users', async (req, res) => {
            sendUsers(res);
        });

        app.get('/users/:id', async (req, res) => {
            const { id } = req.params;
            const query = { _id: ObjectId(id) };
            const user = await userCollection.findOne(query);
            res.send(user);
        });

        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await userCollection.insertOne(user);
            sendUsers(res);
        });

        app.put('/users/:id', async (req, res) => {
            const { id } = req.params;
            const newUser = req.body;
            const filter = { _id: ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    name: newUser.name,
                    email: newUser.email,
                },
            };
            const result = await userCollection.updateOne(filter, updateDoc, options);
            const user = await userCollection.findOne(filter);
            res.send(user);
        });

        app.delete('/users/:id', async (req, res) => {
            const { id } = req.params;
            const query = { _id: ObjectId(id) };
            const result = await userCollection.deleteOne(query);
            sendUsers(res);
        })
    }
    finally { }
};
run().catch(err => { console.log(err) });

app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});

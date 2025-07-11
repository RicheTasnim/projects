const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();




app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://tasnimchowdhuryr:agJ96syGalhbvBd4@cluster0.vlpdl0j.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    try{
        await client.connect();
        await client.db("admin").command({ping: 1});
        console.log("Pinged your deployment. You successfully connected to mongoDB");
    } finally{
        await client.close();
    }
}
run().catch(console.dir);


app.get('/', (res, req) =>{
    res.setEncoding('SIMPLE CRUD IS RUNNING')
})

app.listen(port, () =>{
    console.log(`SIMPLE CRUD is running on port: ${port}`)
});
import cors from "cors";

import { MongoClient, ObjectId } from "mongodb";
import express from "express";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGO_DB_URI);
async function run() {
  try {
    // Get the database and collection on which to run the operation
    const database = client.db("test");
    const courses = database.collection("courses");
    // Execute query
    // courses route
    app.get("/courses", async (req, res) => {
      const cursor = courses.find();
      const result = await cursor.toArray();
      return res.send(result);
    });
    // single course route
    app.get("/courses/:id", async (req, res) => {
      const { id } = req.params;
      const result = await courses.findOne({ _id: new ObjectId(id) });
      return res.send(result);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`✅ Server চলছে: http://localhost:${port}`);
});

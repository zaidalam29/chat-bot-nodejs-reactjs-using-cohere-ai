const { MongoClient, ServerApiVersion } = require("mongodb");


const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB!");
    return client.db("ecommerce");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
}

module.exports = connectDB;

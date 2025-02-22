const cors = require("cors");
const express = require("express");
const { CohereClientV2 } = require("cohere-ai");
const { v4: uuidv4 } = require("uuid"); // Unique Conversation ID
require("dotenv").config();
const connectDB = require("./connectDB");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const cohere = new CohereClientV2({
  token: process.env.COHERE_API_KEY,
});

let db;
connectDB().then((database) => {
  db = database;
});

// ✅ चैट स्टोर करने और रिकॉल करने के लिए Conversation ID का उपयोग
app.post("/chat", async (req, res) => {
  try {
    const { prompt, conversationId } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // अगर कोई conversationId नहीं है तो नया बनाओ
    const convoId = conversationId || uuidv4(); 

    const response = await cohere.chat({
      model: "command-r-plus",
      messages: [{ role: "user", content: prompt }],
    });

    const botResponse = response.message.content[0].text;

    const chatCollection = db.collection("chats");
    const newChat = {
      conversationId: convoId,
      user: "User",
      message: prompt,
      response: botResponse,
      timestamp: new Date(),
    };
    await chatCollection.insertOne(newChat);

    res.json({ response: botResponse, conversationId: convoId });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// ✅ सभी चैट **सेक्वेंस में** लाने के लिए API
app.get("/chats/:conversationId", async (req, res) => {
  try {
    const { conversationId } = req.params;
    const chatCollection = db.collection("chats");

    const chats = await chatCollection
      .find({ conversationId })
      .sort({ timestamp: 1 }) // ⬅️ पुराने पहले, नए बाद में
      .toArray();

    res.json(chats);
  } catch (error) {
    res.status(500).json({ error: "Error fetching chats" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

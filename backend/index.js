require("dotenv").config();
const express = require("express");
const { CohereClientV2 } = require("cohere-ai");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


const cohere = new CohereClientV2({
  token: process.env.COHERE_API_KEY, 
});

app.post("/chat", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await cohere.chat({
      model: "command-r-plus", 
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ response: response.message.content[0].text });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

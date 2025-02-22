# Chat Bot Using React.js, Node.js, and Cohere AI By Zaid Alam

Welcome to **Chat-Bot**! This is an interactive chatbot built using **React.js** for the frontend and **Node.js** for the backend. It leverages **Cohere AI** to handle intelligent responses based on user input. The chat bot allows users to interact and get AI-powered responses in real time.

---

## 🛠️ **Technologies Used**

- **Frontend:**  
  - React.js  
  - CSS/Styled Components  
  - JavaScript (ES6+)

- **Backend:**  
  - Node.js  
  - Express.js

- **AI:**  
  - Cohere AI API for natural language processing (NLP)

- **Database (optional):**  
  - MongoDB (if needed for storing chat data)

---

## 🚀 **Features**

- **Real-time Chat:** Engage in a live conversation with the AI-powered chatbot.
- **Cohere AI:** The chatbot utilizes Cohere’s advanced AI to generate responses based on user input.
- **Persistent Conversations:** Users can maintain their conversation history across sessions.
- **Responsive UI:** Fully responsive chat interface built with React.
- **Secure and Efficient:** Built with Node.js and Express for a fast and secure backend.

---

## 🛠️ **Installation Guide**

### **Step 1: Clone the Repository**

```bash
git clone https://github.com/zaidalam29/chat-bot-nodejs-reactjs-using-cohere-ai.git
cd chat-bot-nodejs-reactjs-using-cohere-ai
```

### **Step 2: Set Up the Backend (Node.js)**

1. Navigate to the **backend** folder:

   ```bash
   cd backend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Set up your **Cohere API Key**:
   - Create an account on [Cohere](https://cohere.ai).
   - Obtain your API key and save it in a `.env` file like below:

     ```
     COHERE_API_KEY=your-cohere-api-key
     ```

4. Start the backend server:

   ```bash
   npm start
   ```

   The backend will run on `http://localhost:5000`.

---

### **Step 3: Set Up the Frontend (React.js)**

1. Navigate to the **frontend** folder:

   ```bash
   cd frontend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

---

## 📲 **How to Use**

1. Open your browser and go to `http://localhost:3000` to interact with the chatbot.
2. Type your message in the input box and press "Send."
3. The chatbot will respond with an intelligent answer powered by **Cohere AI**.
4. Chat history will be visible in the conversation window, and it will persist across page refreshes.

---

## 💡 **How It Works**

- The frontend, built with React, sends a **user message** to the Node.js backend.
- The backend calls the **Cohere AI API**, which processes the input and generates a **response**.
- The response is sent back to the frontend and displayed in the chat interface.

---

## 🔒 **Security and Privacy**

- Ensure that your **Cohere API key** is kept private.
- The application does not store personal data; all chat conversations are handled dynamically.
- You can modify the backend to store conversations in a database (like MongoDB) if necessary.

---

## 💬 **Contributing**

Feel free to fork this project and submit pull requests! Here’s how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request

---

## 📚 **References**

- [Cohere AI Documentation](https://cohere.ai/docs)
- [React.js Official Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Official Documentation](https://nodejs.org/en/docs/)

---

## 🤝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📢 **Contact**

- If you have any questions, feel free to open an issue on GitHub or contact me directly.
- [GitHub Profile](https://github.com/zaidalam29)

---

### **Enjoy chatting with the bot! 🤖💬**


import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const API_URL = "http://localhost:5000";

function App() {
  const [conversationId, setConversationId] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null); 

  useEffect(() => {
    let storedId = localStorage.getItem("conversationId");
    if (!storedId) {
      storedId = uuidv4();
      localStorage.setItem("conversationId", storedId);
    }
    setConversationId(storedId);
    fetchChats(storedId);
  }, []);

  useEffect(() => {
    
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const fetchChats = async (id) => {
    try {
      const res = await fetch(`${API_URL}/chats/${id}`);
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { user: "User", message: input };
    setMessages((prevMessages) => [...prevMessages, newMessage]); 
    setInput("");

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input, conversationId }),
      });

      const data = await res.json();
      const botMessage = { response: data.response };

      setMessages((prevMessages) => [
        ...prevMessages.filter((msg) => msg !== newMessage), 
        { ...newMessage, ...botMessage },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>💬 Chat App</h2>
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div key={index}>
           
            <div style={{ ...styles.message, ...styles.userMessage }}>
              {msg.message}
            </div>

           
            {msg.response && (
              <div style={{ ...styles.message, ...styles.botMessage }}>
                {msg.response}
              </div>
            )}
          </div>
        ))}
        <div ref={chatEndRef} /> 
      </div>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} style={styles.button}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  container: { width: "400px", margin: "auto", textAlign: "center", fontFamily: "Arial" },
  chatBox: { height: "300px", border: "1px solid #ccc", overflowY: "scroll", padding: "10px" },
  message: { padding: "8px", borderRadius: "5px", margin: "5px 0", maxWidth: "80%" },
  userMessage: { backgroundColor: "#0084ff", color: "#fff", textAlign: "right", marginLeft: "auto" },
  botMessage: { backgroundColor: "#e5e5ea", color: "#000", textAlign: "left", marginRight: "auto" },
  inputContainer: { display: "flex", marginTop: "10px" },
  input: { flex: 1, padding: "8px" },
  button: { padding: "8px", backgroundColor: "#0084ff", color: "#fff", border: "none", cursor: "pointer" },
};

export default App;

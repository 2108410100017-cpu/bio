import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div style={{ 
      backgroundColor: "#000", 
      color: "white", 
      minHeight: "100vh", 
      paddingBottom: "70px",
      padding: "20px"
    }}>
      
      <h1>Contact Me</h1>

      <p>Email: anurag@example.com</p>
      <p>GitHub: github.com/anurag</p>
      <p>LinkedIn: linkedin.com/in/anurag</p>

      <h2>Detailed Projects</h2>

      <div>
        <h3>RAG System Architecture</h3>
        <p>Vector DB + Embedding + LLM + Retrieval pipeline.</p>
      </div>

      <div>
        <h3>AI Recruitment System</h3>
        <p>Semantic search, ranking, and automated summaries.</p>
      </div>

      {/* Bottom Navigation */}
      <div style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        backgroundColor: "#111",
        display: "flex",
        justifyContent: "space-around",
        padding: "15px 0",
        borderTop: "1px solid #222"
      }}>
        <button 
          onClick={() => navigate("/")} 
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "16px"
          }}
        >
          🏠 Home
        </button>

        <button 
          onClick={() => navigate("/contact")} 
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "16px"
          }}
        >
          💬 Chat
        </button>
      </div>

    </div>
  );
}

export default Contact;

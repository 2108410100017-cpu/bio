import "./Home.css";
import Stories from "../components/Stories";
import { useNavigate, useLocation } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="feed" style={{ paddingBottom: "70px" }}>

      {/* Top Profile Section */}
      <div className="profile-top">
        <h1>Anurag Tiwari</h1>
        <p>AI Developer | RAG | Node | React | ML</p>
      </div>

      {/* STORIES SECTION */}
      <Stories />

      {/* ABOUT POST */}
      <div className="post">
        <div className="post-header">
          <div className="profile-circle"></div>
          <span className="username">anurag_tiwari</span>
          <span className="dots">•••</span>
        </div>

        <div className="post-content">
          <h2>About Me</h2>
          <p>AI Engineer building scalable RAG and multi-agent systems.</p>
        </div>

        <div className="post-actions">
          ❤️ 💬 ✈️
        </div>
      </div>

      {/* EXPERIENCE POST */}
      <div className="post">
        <div className="post-header">
          <div className="profile-circle"></div>
          <span className="username">anurag_tiwari</span>
          <span className="dots">•••</span>
        </div>

        <div className="post-content">
          <h2>Experience</h2>
          <p>
            Built AI recruitment automation system, video personality analyzer
            and YOLO detection pipelines.
          </p>
        </div>

        <div className="post-actions">
          ❤️ 💬 ✈️
        </div>
      </div>

      {/* SKILLS POST */}
      <div className="post">
        <div className="post-header">
          <div className="profile-circle"></div>
          <span className="username">anurag_tiwari</span>
          <span className="dots">•••</span>
        </div>

        <div className="post-content">
          <h2>Skills</h2>
          <p>
            React, Node, Python, FastAPI, MongoDB, LangChain, Docker
          </p>
        </div>

        <div className="post-actions">
          ❤️ 💬 ✈️
        </div>
      </div>

      {/* Bottom Navigation */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#111",
          display: "flex",
          justifyContent: "space-around",
          padding: "15px 0",
          borderTop: "1px solid #222"
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={{
            background: "none",
            border: "none",
            color: location.pathname === "/" ? "white" : "#aaa",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          🏠 Home
        </button>

        <button
          onClick={() => navigate("/contact")}
          style={{
            background: "none",
            border: "none",
            color: location.pathname === "/contact" ? "white" : "#aaa",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          💬 Chat
        </button>
      </div>

    </div>
  );
}

export default Home;

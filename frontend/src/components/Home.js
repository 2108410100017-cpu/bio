import Stories from "../components/Stories";
import Post from "../components/Post";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="container">

      <div className="profile">
        <h1>Anurag Tiwari</h1>
        <p>AI Developer | RAG | Node | React | ML</p>
      </div>

      <Stories />

      <Post 
        title="About Me"
        content="AI Engineer building scalable RAG and multi-agent systems."
      />

      <Post 
        title="Experience"
        content="Built AI recruitment automation system, video personality analyzer and YOLO detection pipelines."
      />

      <Post 
        title="Skills"
        content="React, Node, Python, FastAPI, MongoDB, LangChain, Docker"
      />

      <Navbar />
    </div>
  );
}

export default Home;

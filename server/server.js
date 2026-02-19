const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const projects = [
  {
    id: 1,
    title: "RAG AI System",
    description: "Built Retrieval Augmented Generation system using LangChain and vector DB.",
    tech: "Python, FAISS, OpenAI, FastAPI"
  },
  {
    id: 2,
    title: "AI Recruitment Platform",
    description: "AI-powered resume screening and semantic ranking system.",
    tech: "Node.js, Supabase, Embeddings"
  },
  {
    id: 3,
    title: "YOLO CCTV Detection",
    description: "Real-time people detection system using YOLOv8.",
    tech: "Python, OpenCV"
  }
];

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/api/projects/:id", (req, res) => {
  const project = projects.find(p => p.id == req.params.id);
  res.json(project);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

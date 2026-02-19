function Contact() {
  return (
    <div className="container">
      <h1>Contact Me</h1>

      <p>Email: anurag@example.com</p>
      <p>GitHub: github.com/anurag</p>
      <p>LinkedIn: linkedin.com/in/anurag</p>

      <h2>Detailed Projects</h2>

      <div className="post">
        <h3>RAG System Architecture</h3>
        <p>Vector DB + Embedding + LLM + Retrieval pipeline.</p>
      </div>

      <div className="post">
        <h3>AI Recruitment System</h3>
        <p>Semantic search, ranking, and automated summaries.</p>
      </div>
    </div>
  );
}

export default Contact;

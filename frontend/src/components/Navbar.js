import { useNavigate } from "react-router-dom";
import { FaHome, FaComment } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <FaHome onClick={() => navigate("/")} />
      <FaComment onClick={() => navigate("/contact")} />
    </div>
  );
}

export default Navbar;

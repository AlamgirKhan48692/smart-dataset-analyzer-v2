import { useNavigate } from "react-router-dom";
import '../index.css'

function Information() {
  const navigate = useNavigate();

  return (
    <div className="box">
      <h1 className="heading">Dataset Information Page</h1>
      <h1 className="heading">Coming Soon</h1>
      <button onClick={() => navigate("/")} className="green-btn mt-4">
        Home 
      </button>
    </div>
  );
}

export default Information;
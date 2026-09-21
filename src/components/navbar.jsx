import { useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>📚</span>
        <h1>Plugghjälpen</h1>
      </div>

      <div className="navbar-buttons">
        <button className="login-button" onClick={() => navigate("/dashboard")}>Logga in</button>
        <button className="signup-button" onClick={() => navigate("/dashboard")}>Kom igång</button>
      </div>
    </nav>
  )
}

export default Navbar

import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import "../App.css"
export default function HomeLayout() {
  const {setUser, user} = useAuth()
  const navigate = useNavigate()
  const logoutHandle=()=>{
    setUser(false)
    navigate("/auth/login")
  }

  return (
    <div className="header">
      <Link to="/">Home Page</Link>
      <Link to="/Contact">Contact</Link>
      <button onClick={logoutHandle}>Logout</button>
      <div className="user">
        Welcome {user.username}
      </div>

    </div>
  )
}


import {  useNavigate } from "react-router-dom"
import { useAuth } from '../../context/AuthContext'
import "./login.css"
export default function Login() {

  const {user, setUser} = useAuth()
  const native = useNavigate()
  const loginHandle=()=>{
    if(user.username === "" || user.password === "")
    {
      alert("Fields cannot be left blank")
      return false
    }
      native("/")
    
  }
  const inputChange=(e)=>{
    setUser({...user,[e.target.name]: e.target.value})
    console.log(user)
  }
  return (
    <div className='loginForm'>
      <input name='username' placeholder='username' value={user.username} onChange={inputChange}/> 
      <input type="password" name="password" placeholder='password' value={user.password} onChange={inputChange}/>
      <button onClick={loginHandle}>Login</button> 
    </div>
  )
}

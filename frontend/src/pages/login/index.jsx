import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "./login.css";
import { userLogin, fetchUser } from "../../services/userServices"
import { useDispatch } from "react-redux";
import { login, setUser } from "../../redux/authSlice";

const Login = () => {
    const form = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userInfos = {
          email: form.current[0].value,
          password: form.current[1].value,
          rememberMe: form.current[2].checked,
        }
        const payload = JSON.stringify(userInfos)
        
        try {
          const data = await userLogin(payload)
          if (data.body.token) {
            dispatch(login({ token: data.body.token }))
    
            const userData = await fetchUser(data.body.token)
            dispatch(
              setUser({
                id: userData.id,
                email: userData.email,
                userName: userData.userName,
                firstName: userData.firstName,
                lastName: userData.lastName,
              })
            )
    
            if (userInfos.rememberMe) {
              localStorage.setItem("token", data.body.token)
              sessionStorage.removeItem("token")
            } else {
              sessionStorage.setItem("token", data.body.token)
              localStorage.removeItem("token")
            }
    
            navigate("/profile")
          } else {
            console.error("Token not found in response:", data)
          }
        } catch (error) {
          setErrorMessage("Invalid username or password. Please try again.")
        }
      }
    

    return (
        <main className="login bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit} ref={form}>

                    <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required />
                        
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            required/>
                    </div>

                    <div className='form-check'>
                        <input
                            type="checkbox"
                            id="checkbox"
            />

                       
                        <label htmlFor="checkbox">Remember Me</label>
                    </div>
                    <span className="error-login-message" style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</span>
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default Login;


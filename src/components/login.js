import React from "react"
import "./login.css"

export default function Login(props) {
  return(
    <div className="login-container">
      <form>
        <fieldset>
          <div className="user-input">
            <label><img src={process.env.PUBLIC_URL + '/files/username.png'} alt="Username"/></label>
            <br />
            <input name="Username" type="text" />
            <br />
            <label><img src={process.env.PUBLIC_URL + '/files/password.png'} alt="Password"/></label>
            <br />
            <input name="Password" type="text" />
          </div>
        </fieldset>
        <button className="submit" type="submit"><img src={process.env.PUBLIC_URL + '/files/login.png'} alt="Login"/></button>
      </form>
      <a className="signup" href="#">Sign Up</a>
      <br />
      <a className="guest-user" href="#">Continue without account</a>
    </div>
  )
}

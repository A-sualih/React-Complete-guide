import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "./store/store";
import { useState } from "react";

const Auth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = (event) => {
    event.preventDefault();
    
    // Simple validation
    if (email === "" || password === "") {
      setError("Please fill in both fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Clear error and login
    setError("");
    dispatch(authActions.login());
  };
const inputChangeHandler=(event)=>{
setEmail(event.target.value);
}
const passwordChangeHandler=(event)=>{
  setPassword(event.target.value)
}
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={inputChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={passwordChangeHandler}
            />
          </div>
          
          {/* Show error message if there is one */}
          {error && <p style={{color: 'red'}}>{error}</p>}
          
          <button className="bg-yellow-700">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
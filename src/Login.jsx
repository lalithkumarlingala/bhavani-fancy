import "./Login.css";

function Login({ onLogin, onSignup }) {
  return (
    <div className="login-page">
      <div className="login-box">

        <h1>Bhavani Fancy</h1>
        <p>Welcome back!</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <span onClick={onSignup}>Sign Up</span>
        </p>

      </div>
    </div>
  );
}

export default Login;
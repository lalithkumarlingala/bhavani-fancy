import "./signup.css";

function Signup({ onSignup, onLogin }) {
  return (
    <div className="signup-page">
      <div className="signup-box">

        <h1>Bhavani Fancy</h1>
        <p>Create your account</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSignup();
          }}
        >
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <span onClick={onLogin}>Login</span>
        </p>

      </div>
    </div>
  );
}

export default Signup;
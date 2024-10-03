import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input
        className="form-control mb-2"
        id="wd-username"
        placeholder="username"
      />{" "}
      <input
        className="form-control mb-2"
        id="wd-password"
        placeholder="password"
        type="password"
      />{" "}
      <Link
        className="btn btn-primary w-100 mb-2"
        id="wd-signin-btn"
        to="/Kanbas/Dashboard"
      >
        Sign in
      </Link>
      <br />
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}

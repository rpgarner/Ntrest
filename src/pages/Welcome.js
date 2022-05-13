
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm"

const Welcome = (props) => {


  return (
    <div className="welcome_page">
    <div className="login_register">
      <h1>Welcome </h1>
      <LoginForm 
       setUser={props.setUser}
       toggleAuthenticated={props.toggleAuthenticated}
      />
      <h5>or</h5>
      <Link to='/register'>
      <button className="register-btn" type="submit">
        Register
      </button>
      </Link>
    </div>
    </div>
  );
};

export default Welcome;

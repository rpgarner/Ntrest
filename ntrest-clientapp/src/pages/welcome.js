
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm"

const Welcome = (props) => {


  return (
    <div>
      <h1>Welcome </h1>
      <LoginForm 
       setUser={props.setUser}
       toggleAuthenticated={props.toggleAuthenticated}
      />
      <Link to='/register'>
      <button className="register-btn" type="submit">
        Register
      </button>
      </Link>
    </div>
  );
};

export default Welcome;

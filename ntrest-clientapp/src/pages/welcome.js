
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm"

const Welcome = () => {


  return (
    <div>
      <h1>Welcome </h1>
      <LoginForm />
      <Link to='/register'>
      <button className="register-btn" type="submit">
        Register
      </button>
      </Link>
    </div>
  );
};

export default Welcome;

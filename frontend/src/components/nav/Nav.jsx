import "./nav.css";
import nav_logo from "../../img/argentBankLogo.webp";
import { logout } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.auth.firstName);
  
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <nav>
      <Link to="/">
        <img src={nav_logo} alt="Argent Bank Logo" />
        <h1>Argent Bank</h1>
      </Link>
      {token ? (
        <div className="nav-right">
          <Link to="/profile">
          <i className="fa fa-user-circle"></i>
          {firstName || "[First Name]"} 
          </Link>

          <Link to="/" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Sign out
          </Link>
        </div>
      ) : (
        <Link to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      )}
    </nav>
  );
};

export default Nav;

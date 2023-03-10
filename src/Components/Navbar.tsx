import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        {user ? <Link to="/create-post">Create Post</Link> :  <Link to="/login">Login</Link>}
      </div>

      {user && (
        <div className="user-info">
          <img
            src={user?.photoURL || ""}
            alt="user google icon"
            height={50}
            width={50}
          />
          <p>{user?.displayName}</p>
          <button className="logout" onClick={signUserOut}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const signInResults = await signInWithPopup(auth, provider);
    console.log(signInResults);
    navigate("/");
  };
  return (
    <div>
      <p>Sign in with Google to Continue</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
};

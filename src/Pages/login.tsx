import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

export const Login = () => {
  const signInWithGoogle = async () => {
    const signInResults = await signInWithPopup(auth, provider);
    console.log(signInResults)
  };
  return (
    <div>
      <p>Sign in with Google to Continue</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
};

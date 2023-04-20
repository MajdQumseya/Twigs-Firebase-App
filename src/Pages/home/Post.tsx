import { addDoc, getDocs, collection, query, where } from "firebase/firestore";
import { Post as IPost } from "./home";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

interface PostProps {
  post: IPost;
}

export const Post = (props: PostProps) => {
  const { post } = props;
  const [user] = useAuthState(auth);
  const [likeAmount, setLikeAmount] = useState<number | null>(null)

  const likesRef = collection(db, "likes");

  const getLikes = async() => {
    const data = await getDocs(likesDoc)
    setLikeAmount(data.size)
  }

  const likesDoc = query(likesRef, where("postId", "==", post.id))
  

  const addLike = async () => {
    try {
       await addDoc(likesRef, {userId: user?.uid, postId: post.id});
      
     
    } catch (e) {
      console.error("Error adding like: ", e);
    }
  };

  useEffect(() => {
    getLikes()
  }, []);


  return (
    <div>
      <div className="title">
        <h1>{post.title}</h1>
      </div>
      <div className="body">
        <p>{post.description}</p>
      </div>
      <div className="footer">
        <p>@{post.username}</p>
        <button onClick={addLike}> &#128077; </button>
        {likeAmount && <p>Likes: {likeAmount}</p>}
      </div>
    </div>
  );
};



import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Post } from "./Post";

export interface Post {
  id: string;
  userId: string;
  title: string;
  description: string;
  username: string;
}

export const Home = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null);
  const postsRef = collection(db, "posts");

  const getPosts = async () => {
    let data = await getDocs(postsRef);
    console.log(data);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {postsList?.map((post) => 
        <Post post={post} />
      )}
    </div>
  );
};

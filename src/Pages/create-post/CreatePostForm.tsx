import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {useNavigate} from 'react-router-dom'
 
interface CreatePostData {
  title: string;
  description: string;
}

export const CreatePostForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const postSchema = object().shape({
    title: string().required("Title is required."),
    description: string().required("Description is required."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostData>({
    resolver: yupResolver(postSchema),
  });

  const postsRef = collection(db, "posts");

  const onCreatePost = async (data: CreatePostData) => {
    try {
      const docRef = await addDoc(postsRef, {
        ...data,
        username: user?.displayName,
        userId: user?.uid,
      });
      console.log("Document written with ID: ", docRef.id);
      navigate("/");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onCreatePost)} method="post">
      <input type="text" placeholder="Title..." {...register("title")} />
      <p style={{ color: "red" }}>{errors.title?.message}</p>
      <textarea placeholder="Description..." {...register("description")} />
      <p style={{ color: "red" }}>{errors.description?.message}</p>
      <input type="submit" />
    </form>
  );
};

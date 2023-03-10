import { useForm } from "react-hook-form";
import { object, string, number, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

let postSchema = object({
  title: string().required("Blog title is required"),
  description: string().required("Blog description is required"),
  username: string().required("Please enter a valid username"),
  id: string().min(4).max(20).required("id is required."),
});

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: yupResolver(postSchema),
});

const onSubmit = async (d) => {
  const post = await postSchema.validate(d);
  console.log({ post });
};

export const CreatePostForm = () => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
     <input type="text" placeholder="Title..." {...register("title")} />
     <input type="text" placeholder="Description..."{...register("desscription")} />
     <input type="submit"  />
    </form>
  );
};

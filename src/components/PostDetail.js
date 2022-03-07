import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";

export default function PostDeatil() {
  const { postId } = useParams();
  const [post, setPost] = useState({})
  
  useEffect(() => {
    firestore.collection('posts').doc(postId).get()
      .then((snapshot) => {
        setPost(snapshot.data());
      })
  },[])

  return (
    <div className='p-2 flex justify-center align-middle'>
      <div className=" flex-col justify-center align-middle">
        <h1 className=" font-extrabold text-5xl">{post?post.title:""}</h1>
        <br/>
        <br/>
        <h1 className=" font-bold text-3xl">{post?post.subTitle:""}</h1>
        <br/>
        <br/>
        <br/>
        <br />
        <p>{post?post.content:""}</p>
      </div>
    </div>
  );
}
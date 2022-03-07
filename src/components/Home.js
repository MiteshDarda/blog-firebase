import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";

export default function Home() {
  const [posts, setPosts] =  useState([])

  useEffect(() => {
    firestore.collection('posts').get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setPosts(posts)
      })
  },[])

  return (
    <div className='p-2'>
      <div className=" ">
        {posts.map((post, index) => {
          return (
            <div
              className="
              border-black border-2
              border-solid h-32 p-2 m-4 min-w-[15rem] px-5
              bg-gradient-to-r from-gray-200 to-neutral-500
              hover:bg-gradient-to-r 
              hover:from-neutral-500 
              hover:to-gray-200"
              key={index}
            >
              <Link to={`post/${post.id}`}>
                <div
                  className="flex-col justify-center align-middle hover:text-emerald-900"
                >
                  <p className=" text-2xl font-bold ">{post.title}</p>
                  <p className="text-lg font-semibold ">{ post.subTitle}</p>
                </div>
              </Link>
            </div>
          )})}
      </div>
    </div>
  );
}
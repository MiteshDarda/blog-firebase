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
        console.log(posts)
        setPosts(posts)
      })
  },[])

  return (
    <div className='p-2'>
      <div className=" flex justify-evenly align-middle flex-wrap">
        {posts.map((post, index) => {
          return (
            <div
              className="
              border-black border-2
              border-solid h-32 p-2 bg-white m-4 min-w-[15rem]"
            >
              <Link to={`post/${post.id}`}>
                <div
                  className="flex-col justify-center align-middle"
                >
                  <p className=" text-2xl">{post.title}</p>
                  <p className="text-lg">{ post.subTitle}</p>
                </div>
              </Link>
            </div>
          )})}
      </div>
    </div>
  );
}
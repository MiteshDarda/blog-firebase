import { useFormInput } from "../formInputHook";
import {firestore} from "../firebase"

export default function CreatePost() {
  const title =  useFormInput('')
  const subTitle =  useFormInput('')
  const content = useFormInput('')
  
  function handleSubmit(e) {
    e.preventDefault();
    firestore.collection('posts').add({
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date()
    })
    console.log('submit')
  }

  return (
    <div className='p-2 flex justify-center align-middle'>
      <div className=" flex-col justify-center align-middle">
        <span className=" font-extrabold text-5xl">Create Post</span>
        <br/>
        <br/>
        <form className=" block w-full text-lg" onSubmit={handleSubmit}>
            <label className="">
              <span className="block p-2 font-medium text-slate-700">
                Title
              </span>
            <input {...title} placeholder="Title"
              className=" p-2 pl-4 border-black border-solid border-2 rounded-lg w-96"
              />
            </label>
            <label className="">
              <span className="block p-2 font-medium text-slate-700">
                Sub-Title
              </span>
            <input {...subTitle} placeholder="Sub-Title"
              className="p-2 pl-4 border-black border-solid border-2 rounded-lg w-96"
              />
            </label>
            <label className="">
              <span className="block p-2 font-medium text-slate-700">
                Content
              </span>
            <textarea {...content} placeholder="Title"
              className="p-2 pl-4 border-black border-solid border-2 rounded-lg w-96 h-32"
              />
          </label>
          <br/>
          <br/>
          <button className=" bg-gray-500 p-3 text-lg rounded-lg text-white hover:bg-gray-700">Create Post</button>
        </form>
      </div>
    </div>
  );
}
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='mb-3'>
      <ul
        className="list-none 
        bg-black text-2xl mb-7
        text-white font-bold
        flex align-center justify-end">
        <Link to={'/'}>
          <li className="text-center p-10 hover:bg-gray-600 hover:text-black ">
            Home
          </li>
        </Link>
        <Link to={'/create-post'}>
          <li className="text-center p-10 hover:bg-gray-600 hover:text-black">
            Create Post
          </li>
        </Link>
      </ul>
    </div>
  );
}
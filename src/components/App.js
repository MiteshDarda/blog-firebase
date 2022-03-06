import { Routes, Route } from 'react-router-dom'
import {Navbar, CreatePost, Home, PostDetail} from './'

export default function App() {
  return (
    <div className='bg-gradient-to-r from-blue-200 to-green-200 min-h-screen'>
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route path='/post/:postId' element={<PostDetail/>} />
        <Route path='/create-post' element={<CreatePost/>} />
      </Routes>
    </div>
  );
}


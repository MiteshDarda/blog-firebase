import { Routes, Route } from 'react-router-dom'
import {Navbar, CreatePost, Home, PostDetail} from './'

export default function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route path='/post/:postId' element={<PostDetail/>} />
        <Route path='/create-post' element={<CreatePost/>} />
      </Routes>
    </div>
  );
}


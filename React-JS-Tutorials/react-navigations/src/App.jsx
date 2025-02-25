import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Posts from './components/Post/Posts';
import Navbar from './components/Nav/Navbar';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/posts/:postId' element={<PostDetails/>}/>
    </Routes>
</BrowserRouter>
  )
}

export default App;
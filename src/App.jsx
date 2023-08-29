import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Contact } from './components/Contact'
import { About } from './components/About'
import { Cart} from './components/Cart'
import {Route, Routes} from 'react-router-dom';
import { Menu } from './components/Menu'
import {Context} from "../src/context/Context"
function App() {
  return (
    <>
  <Context>
  <Navbar/>
   <Routes>
      <Route path="/" element={<> <Home/> <Menu/></>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </Context>
  
   </>
  )
  }

export default App

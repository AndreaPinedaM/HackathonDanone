import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Form from '../pages/Form'
import Products from '../pages/Products'
import User from '../pages/User'

function App() {

  return (
    <div id="appBody">
      <Router>
        <div id="navbar">
          <Navbar></Navbar>
        </div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/calorias' element={<Form />}></Route>
          <Route path='/productos' element={<Products />}></Route>
          <Route path='/usuario' element={<User />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

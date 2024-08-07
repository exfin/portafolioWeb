
import './App.css'

import { Routes , Route, BrowserRouter } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Hobbies from './pages/Hobbies'
import Proyects from './pages/Proyects'

function App() {
  

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<About></About>}></Route>
          <Route path='/projects' element={<Proyects></Proyects>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/hobbies' element={<Hobbies></Hobbies>}></Route>

        </Routes>
      
      </BrowserRouter>



    </div>
  )
}

export default App

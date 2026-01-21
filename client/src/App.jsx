import React from 'react'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Auth from './Pages/Auth'
import ProfilePage from './Pages/ProfilePage'

const App = () => {
  return (
    <div>
      <Nav/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>

    </div>
  )
}

export default App
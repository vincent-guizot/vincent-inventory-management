import React from 'react'
import {Routes, Route} from 'react-router-dom'


// Pages
import Home from '../pages/Home'
import User from '../pages/User'
import Item from '../pages/Item'

const MainContent = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="users" element={<User/>}></Route>
        <Route path="items" element={<Item/>}></Route>
      </Routes>

    </div>
  )
}

export default MainContent